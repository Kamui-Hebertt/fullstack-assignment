interface IContext {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>; 
}

export default IContext;
