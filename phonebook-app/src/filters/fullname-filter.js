// filter function

// this function is called only one time by angularjs during boot process
export function fullnameFilter() {
    // this function is called for every usage of the filter 'fullname'
    // USAGE: {{ c | fullname }} or {{ contact | fullname }}
    // the LHS of the pipe symbol is passed as an argument to this function
    return function(contact){
        if(!contact) return '';

        var title;
        switch(contact.gender.toUpperCase()) {
            case 'M': case 'MALE':
                title = 'Mr.'; break;
            case 'F': case 'FEMALE':
                title = 'Ms.'; break;
            default:
                title = '';
        }
        var fname = contact.first_name;
        var lname = contact.last_name;

        return title + ' ' + fname + ' ' + lname;
        // return `${title} ${fname} ${lname}`;
    };

}