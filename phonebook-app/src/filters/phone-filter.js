function transform(phone) {
    if(!phone) return '';
    
    phone = new String(phone);

    var p1 = phone.substr(0, 3);
    var p2 = phone.substr(3, 3);
    var p3 = phone.substr(6);

    return `(${p1}) ${p2}-${p3}`;
}

export function phoneFilter() {
    return transform;
}