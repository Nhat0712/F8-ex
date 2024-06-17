function createCustomer(name, age, address) {
    var parts = name.split(" ");
    var shortName = parts[0] + " " + parts[parts.length - 1];
    return {
        name,
        age,
        address,
        shortName
    };
}

function createCustomers(customers) {
    function mapCustomer(customer) {
        return createCustomer(customer.name, customer.age, customer.address);
    } 
    var newCustomers = customers.map(mapCustomer);
    newCustomers.sort((a, b) => a.age - b.age);
    return newCustomers;
}

var customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

var result = createCustomers(customers);
console.log(result);
