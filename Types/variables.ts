let movieName: string = "The Dark Knight";
movieName = "The Dark Knight Rises";
//movieName = 10; // Error: Type '10' is not assignable to type 'string'.
movieName.toUpperCase(); // OK

let movieYear: number = 2008;
movieYear = 2024;
movieYear = 2024.5;
movieYear = 2024.5 + 0x0A; // OK
movieYear = 2024.5 + 0b1010; // OK
movieYear = 2024.5 + 0o12; // OK
//movieYear = "2008"; // Error: Type '"2008"' is not assignable to type 'number'.
movieYear.toFixed(); // OK

let isReleased: boolean = true;
isReleased = false;
//isReleased = "true"; // Error: Type '"true"' is not assignable to type 'boolean'.
isReleased.valueOf(); // OK