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
let skill1 = {cool: 0, name: "Technical Support"};

let skill2 = {cool: 0, name: "Customer Satisfaction"};

let skill3 = {cool: 0, name: "Computer Repair"};

let skill4 = {cool: 0, name: "Network Security"};

let skill5 = {cool: 0, name: "Inventory Management"};

let skill6 = {cool: 0, name: "Cash Handling"};

let skill7 = {cool: 1, name: "HTML"};

let skill8 = {cool: 1, name: "CSS"};

let skill9 = {cool: 1, name: "Javascript"};
// displayPosition function
function displayPosition(position) {
    let name = position.name;

    let title = position.title;

    let description = position.description;

    console.log(`"Company Name: ${name} Position Held: ${title} Job Description: ${description}"`);
};
//displayPosition calls
displayPosition(job1);

displayPosition(job2);

displayPosition(job3);

displayPosition(job4);
// displaySkill function
function displaySkill(skill) {
    let cool = skill.cool;

    let name = skill.name;

    if (cool == Boolean(true)) {
        console.log(`"BAM: ${name}"`)
    } else {
        console.log(name);
    }
};

displaySkill(skill1);

displaySkill(skill2);

displaySkill(skill3);

displaySkill(skill4);

displaySkill(skill5);

displaySkill(skill6);

displaySkill(skill7);

displaySkill(skill8);

displaySkill(skill9);