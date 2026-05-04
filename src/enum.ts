//An enum is a special "class" that represents a group of constants (unchangeable variables).


enum UserRole{
  admin = 'admin',
  editor = 'editor',
  guest='guest',
};
const getAccess = (role: UserRole) => {
  if (role === UserRole.admin || role === UserRole.editor)
    return true;
  return false;
};
console.log(getAccess(UserRole.admin));