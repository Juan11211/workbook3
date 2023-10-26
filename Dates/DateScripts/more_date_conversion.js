function formatDate(date) {
    const month = date.getMonth() + 1; // Month is zero-based
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
}

const birthday = new Date('09171995');
const momsBirthday = new Date('09111971');
const dadsBirthday = new Date(1971, 3, 3); // Replace yyyy, m, and d with the year, month, and day for your dad's birthday

console.log('Birthday:', formatDate(birthday));
console.log("Mom's Birthday:", momsBirthday.toDateString());
console.log("Dad's Birthday:", formatDate(dadsBirthday));
