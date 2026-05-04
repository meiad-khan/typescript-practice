// enum UserRole {
//   admin = "admin",
//   editor = "editor",
//   guest = "guest",
// }

const UserRole = {
  admin: 'ADMIN',
  editor: 'EDITOR',
  guest: 'GUEST',
} as const;

const getAccess = (role: typeof UserRole[keyof typeof UserRole]) => {
  if (role === UserRole.admin || role === UserRole.editor) return true;
  return false;
};
console.log(getAccess(UserRole.admin));


/*
// as const assertion

// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

const UserRoles = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

/*
{
  readonly Admin: "Admin",
  readonly Editor: "Editor",
  readonly Viewer: "Viewer",

1. typeof perator
2. keyof operator 

const user= {
 id: 222,
 name:'Mezba'
}

user['id'] >>> 222


typeof user;

{
id: number;
name:string
}

typeof UserRoles

{
 Admin: 'Admin';
 Editor: "Editor",
 Viewer: "Viewer",
}

keyof typeof UserRoles
'Admin'| 'Editor' | 'Viewer'

'ADMIN' |'EDITOR |'VIEWER'

UserRoles['Admin']  >>> 'ADMIN'
  typeof UserRoles[keyof typeof UserRoles]


}
*/
/*
const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
*/
