import { AbstractControl } from '@angular/forms';

export function passwordmatching(control: AbstractControl) {
    if(control && (control.value !== null || control.value !== undefined)) {
        const pwordchk = control.value;
        const pword = control.root.get('pword');
        if(pword) {
            const password = pword.value;
            if (password !== pwordchk) {
                return {
                    passwordNotMatched: true
                }
            }
        } 
    }
    return;
}

export function usermatching(control: AbstractControl) {
    if(control && (control.value !== null || control.value !== undefined)) {
        const username = control.value;
        const notavailable = {"users":[ "abc", "xyz", "username", "Administrator", "administrator", "user1", "admin", "alex", "pos", "demo", "db2admin", "sql" ]}
        if(username) {
            for (var i = 0; i < notavailable.users.length; i++) {
                if(username==notavailable.users[i]){
                    return {userNameNotAvailable: true}
                }
              }
        }
    }
    return;
}

export function passwordValidator(control: AbstractControl) {
    if(control && (control.value !== null || control.value !== undefined)) {
        let hasNumber = /\d/.test(control.value);
        let hasUpper = /[A-Z]/.test(control.value);
        let hasLower = /[a-z]/.test(control.value);
        let hasSpecial = /[$@$!%*?&]/.test(control.value);
        
        if (!hasNumber) {
            return { passwordDoesNotHaveDigit: true };
            }
        if (!hasLower) {
            return { passwordDoesNotHaveLowercase: true };
                }
        if (!hasUpper) {
            return { passwordDoesNotHaveUppercase: true };
                }
        if (!hasSpecial) {
            return { passwordDoesNotHaveSpecial: true };
                }
            }
            return;
        }

