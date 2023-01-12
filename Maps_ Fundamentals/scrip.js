//định nghĩa: là 1 loại Object cho phép lưu trữ dữ liệu theo kiểu key-value.
const rest = new Map();
rest.set('name', 'Classico Italino');
rest.set(1, 'Firenze, Itatly');
console.log(rest.set(2,'Lisbon, Portugal'));

rest
    .set('categories', ['Italian','Pizzeria','Vegetarian','Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open:')
    .set(false, 'We are close:');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);//toán tử xóa
console.log(rest);
console.log(rest.size);
// rest.clear();    
