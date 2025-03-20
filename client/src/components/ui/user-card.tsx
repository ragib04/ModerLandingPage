import { Mail, Phone, Globe } from 'lucide-react';
import { User } from '@/types';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  // Generate initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Generate a consistent color based on user id
  const getColorClass = (id: number) => {
    const colors = [
      'bg-primary/10 text-primary',
      'bg-emerald-500/10 text-emerald-500',
      'bg-purple-500/10 text-purple-500',
      'bg-amber-500/10 text-amber-500',
      'bg-rose-500/10 text-rose-500',
      'bg-cyan-500/10 text-cyan-500',
    ];
    return colors[id % colors.length];
  };

  const getButtonColor = (id: number) => {
    const colors = [
      'text-primary hover:text-blue-700',
      'text-emerald-500 hover:text-emerald-600',
      'text-purple-500 hover:text-purple-600',
      'text-amber-500 hover:text-amber-600',
      'text-rose-500 hover:text-rose-600',
      'text-cyan-500 hover:text-cyan-600',
    ];
    return colors[id % colors.length];
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition duration-300">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`h-12 w-12 rounded-full ${getColorClass(user.id)} flex items-center justify-center font-bold text-xl`}>
            {getInitials(user.name)}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
            <p className="text-gray-500 text-sm">@{user.username}</p>
          </div>
        </div>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-gray-400 mr-2 shrink-0" />
            <span className="break-all">{user.email}</span>
          </div>
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-gray-400 mr-2 shrink-0" />
            <span>{user.phone}</span>
          </div>
          <div className="flex items-start">
            <Globe className="h-5 w-5 text-gray-400 mr-2 shrink-0" />
            <span>{user.website}</span>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className={`${getButtonColor(user.id)} text-sm font-medium transition duration-300`}>
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}
