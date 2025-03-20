import { useState, useEffect, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { UserCard } from '@/components/ui/user-card';
import useDebounce from '@/hooks/useDebounce';
import { Trie } from '@/lib/trie';
import { User } from '@/types';
import { AlertCircle, Search } from 'lucide-react';

const UsersSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [userTrie, setUserTrie] = useState<Trie | null>(null);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  const { data: users, isLoading, error, refetch } = useQuery<User[]>({
    queryKey: ['https://jsonplaceholder.typicode.com/users'],
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Initialize Trie with user data
  useEffect(() => {
    if (users && users.length > 0) {
      const trie = new Trie();
      users.forEach(user => {
        trie.insert(user.name.toLowerCase(), user);
        trie.insert(user.username.toLowerCase(), user);
        trie.insert(user.email.toLowerCase().split('@')[0], user);
      });
      setUserTrie(trie);
      setFilteredUsers(users);
    }
  }, [users]);

  // Handle search with debounced input
  useEffect(() => {
    if (!debouncedSearchTerm.trim() && users) {
      setFilteredUsers(users);
      return;
    }

    if (userTrie && debouncedSearchTerm.trim()) {
      const results = userTrie.search(debouncedSearchTerm.toLowerCase());
      // Remove duplicates by user ID
      const uniqueUsers = Array.from(new Map(results.map(user => [user.id, user])).values());
      setFilteredUsers(uniqueUsers);
    }
  }, [debouncedSearchTerm, userTrie, users]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section id="users" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Clients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Trusted by businesses around the world.</p>
        </motion.div>
        
        {/* Search Bar with Debounce */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input 
              type="text" 
              id="search-users"
              placeholder="Search users..." 
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition duration-300"
              onChange={handleSearchInputChange}
              value={searchTerm}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* User List */}
        <div className="relative">
          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-12">
              <svg className="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          )}
          
          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <div className="text-red-500 mb-4">
                <AlertCircle className="h-12 w-12 mx-auto" />
              </div>
              <p className="text-lg font-medium text-gray-800 mb-2">Failed to load users</p>
              <p className="text-gray-600 mb-4">There was an error fetching user data. Please try again later.</p>
              <button 
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300"
                onClick={() => refetch()}
              >
                Try Again
              </button>
            </div>
          )}
          
          {/* Users Grid */}
          {!isLoading && !error && filteredUsers.length > 0 && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {filteredUsers.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </motion.div>
          )}
          
          {/* No Results State */}
          {!isLoading && !error && filteredUsers.length === 0 && debouncedSearchTerm.trim() !== '' && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <p className="text-lg font-medium text-gray-800 mb-2">No users found</p>
              <p className="text-gray-600">Try adjusting your search terms or clear the search.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UsersSection;
