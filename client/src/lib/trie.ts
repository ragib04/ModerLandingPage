import { User } from '@/types';

/**
 * Trie data structure for efficient search
 * 
 * This implementation allows searching for users by name, username, or email
 * with fast prefix matching and efficient memory usage.
 */
class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;
  users: User[];

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
    this.users = [];
  }
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Inserts a word into the trie with associated user data
   * @param word The word to insert (typically a name, username, or email)
   * @param user The user associated with this word
   */
  insert(word: string, user: User): void {
    let current = this.root;
    
    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      
      current = current.children.get(char)!;
    }
    
    current.isEndOfWord = true;
    
    // Add user to this node if not already added
    if (!current.users.some(u => u.id === user.id)) {
      current.users.push(user);
    }
  }

  /**
   * Searches for all users that match the given prefix
   * @param prefix The search prefix
   * @returns Array of users matching the prefix
   */
  search(prefix: string): User[] {
    let current = this.root;
    
    // Navigate to the node representing the prefix
    for (const char of prefix) {
      if (!current.children.has(char)) {
        return []; // Prefix not found
      }
      
      current = current.children.get(char)!;
    }
    
    // Collect all users from this node and its descendants
    return this.collectUsers(current);
  }

  /**
   * Collects all users from a node and its descendants
   * @param node The starting node
   * @returns Array of users
   */
  private collectUsers(node: TrieNode): User[] {
    const users: User[] = [...node.users];
    
    // Recursively collect users from all child nodes
    for (const childNode of node.children.values()) {
      users.push(...this.collectUsers(childNode));
    }
    
    // Remove duplicates by user ID
    return Array.from(new Map(users.map(user => [user.id, user])).values());
  }
}
