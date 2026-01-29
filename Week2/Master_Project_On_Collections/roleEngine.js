
const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
//   -> Check if student can delete
//   -> Create a flat list of all unique permissions
//   -> Add new role moderator immutably

export function getRoles(){
    let rolllNames = [];
    for(let role in roles){
        // console.log(role);
        rolllNames.push(role);
        
    }
    return rolllNames;
}
// console.log(getRoles());

export function checkStudent(){
    let canDelete = false;
    for(let val of roles.student){
        if(val === 'delete') {
            canDelete = true;
            break;
        }
    }
    return canDelete;
}

// console.log(checkStudent());

// we need all the unique permissions but as we know that admin will have all the permission so we can assign all the permissions of admin to this 

export function allPermissions(){
    let permissions = [];
    for(let val of roles.admin){
        permissions.push(val);
    }
    return permissions;
}

// console.log(allPermissions());


// adding a new role immutably

export function addRole(role,permissios){
    let newRoles = structuredClone(roles);
    newRoles[role] = permissios; // [] is used for the dynamic name
    return newRoles;
}

// console.log(addRole('moderator',['view','delete','edit']));

// so with this we have completed this task
