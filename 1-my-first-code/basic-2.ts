enum Role {ADMIN = 99, READ_ONLY, AUTHOR}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [Role, string];
  etc: any;
} = {
  name: 'Aziz Ramdan Kurniawan',
  age: 24,
  hobbies: ['Eat', 'Cooking'],
  role: [Role.AUTHOR, 'Author'],
  etc: 'blabla',
}

console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}