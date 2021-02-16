// Personal info object
let me = {name: "L3p", career: "Aspiring Web Developer", about: "I've spent the greater majority of my life in customer service. I attempted to get into warehouse work but was injured in both jobs I tried. I am now pursuing my goal of becoming a Web developer"};
console.log(me.name.toUpperCase(), me.career, me.about)
// Interests array)
let interests = ["Fishing", "Camping", "Hiking", "Gaming", "Technology", "Coding"];
console.log(interests);
// work experience objects
let job1 = {name: "Pizza Hut", title: "Shift Lead", description: "Opening or closing store using proper procedure. Making drops and deposits. Doing daily inventory. Stocking store with new products when dropped off. Opening and closing drawers in the morning and at night. Assigning duties for team members to complete before leaving. Handling in sore and over the phone sales. Answering advanced customer inquiries or concerns. Making sure store is clean and all side activities have been completed by end of day."};

let job2 = {name: "Pizza Hut", title: "Cook", description: "Taking orders by phone or in store. Keeping advanced product knowledge to quickly and efficiently make customer orders to perfect spec. prepping dough and products for use next day. Labeling prep with correct dates to ensure product quality. prepping orders for drivers to go out to customers. Taking cash or charge payments. Keeping the ingredient table in order and clean. Cleaning make table before open or after close."};

let job3 = {name: "Pizza Hut", title: "Delivery Driver", description: "Taking calls as fast as possible to take customer orders, and inquiries. Driving to and from customer business' or homes as quick as possible. Always using the CARES model to ensure the highest level of customer service when in store or out of store. Handling cash for orders. Doing daily duties before leaving such as mopping store, cleaning and stocking bathrooms, cleaning oven racks, stocking chicken, cleaning and stocking wing table. Handling cash or charge sales."};

let job4 = {name: "DirecTV", title: "Tech Support", description: "Answering phone calls for tech support on DirecTV related equipment and software issues. Controlling call flow by using scripts and related experience or training. Making every call a conversation and not a transaction. Meeting or exceeding goals put forth by my team leader"};
// skills objects
let skill1 = {cool: false, name: "Technical Support"};

let skill2 = {cool: false, name: "Customer Satisfaction"};

let skill3 = {cool: false, name: "Computer Repair"};

let skill4 = {cool: false, name: "Network Security"};

let skill5 = {cool: false, name: "Inventory Management"};

let skill6 = {cool: false, name: "Cash Handling"};

let Skill7 = {cool: true, name: "HTML"};

let skill8 = {cool: true, name: "CSS"};

let skill9 = {cool: true, name: "Javascript"};
// displayPosition function
function displayPosition(name, title, description) {
    console.log(name, title, description)
};

displayPosition(job1);

displayPosition(job2);

displayPosition(job3);

displayPosition(job4);
// displaySkill