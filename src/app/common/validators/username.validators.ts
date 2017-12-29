import { AbstractControl, ValidationErrors } from "@angular/forms";
   
export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0) {
            return {cannotContainSpace: true}
        }
        return null;
    }

    static shouldBeUnique(control: AbstractControl)  : Promise <ValidationErrors | null> {
        // Asychronus validation
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(control.value==='samaras');
                if(control.value === 'samaras') {
                    console.log(resolve({shouldBeUnique : true}))
                    resolve({shouldBeUnique : true});                    
                }
                else {
                    resolve({shouldBeUnique : false});;
                }   
            }, 2000);
        });
    }
}