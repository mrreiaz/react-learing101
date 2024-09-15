
How to add card compontnts and reuse it ? 
as will as style it. 



How to create brach in github using cmd . 
git fetch origin
git checkout -b day2
git push -u origin day2


What are the components ?

How to add new components?

How to use and reuse components? 
React-এ কম্পোনেন্ট (Components) হলো এমন একটি বিল্ডিং ব্লক যা ওয়েব অ্যাপ্লিকেশনের UI (User Interface) গঠনের জন্য ব্যবহৃত হয়। React-এ কম্পোনেন্টগুলির কাজ হলো UI-এর বিভিন্ন অংশকে ছোট ছোট টুকরো হিসেবে ভাগ করা, যা পুনঃব্যবহারযোগ্য এবং স্বতন্ত্রভাবে পরিচালিত হতে পারে।
কম্পোনেন্টের প্রকারভেদ:
React-এ সাধারণত দুই ধরনের কম্পোনেন্ট রয়েছে:
ফাংশনাল কম্পোনেন্ট (Functional Component):
এগুলো সাধারণ ফাংশনের মতোই কাজ করে।
props ব্যবহার করে ডেটা গ্রহন করে।
React Hooks-এর মাধ্যমে state এবং lifecycle method ব্যবহার করা যায়।
উদাহরণ:

function Welcome(props) {
    return <h1>স্বাগতম, {props.name}!</h1>;
}


ক্লাস কম্পোনেন্ট (Class Component):
এটি একটি ক্লাসের মাধ্যমে ডিফাইন করা হয় এবং extends React.Component ব্যবহার করে।
state পরিচালনা করতে এবং lifecycle method-গুলোর মাধ্যমে complex কার্যক্রম করতে ক্লাস কম্পোনেন্ট উপযুক্ত।
উদাহরণ:

class Welcome extends React.Component {
    render() {
        return <h1>স্বাগতম, {this.props.name}!</h1>;
    }
}


কম্পোনেন্ট কিভাবে কাজ করে?
props (প্রপস): একটি কম্পোনেন্টে বাহির থেকে ডেটা প্রেরণ করতে props ব্যবহার করা হয়। এটা immutable, অর্থাৎ প্রপসের মান পরিবর্তন করা যায় না। প্রপস ডেটা প্যারামিটারের মতো কাজ করে যা প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে পাঠানো হয়।
state (স্টেট): প্রতিটি কম্পোনেন্টের নিজের একটি স্টেট থাকতে পারে, যা কম্পোনেন্টের অভ্যন্তরীণ ডেটা ধারণ করে। স্টেট পরিবর্তন হলে, React কম্পোনেন্টটিকে পুনরায় রেন্ডার করে।
UI গঠন: প্রতিটি কম্পোনেন্ট তার নিজস্ব UI অংশ তৈরি করে, যেমন বাটন, টেক্সট ফিল্ড, তালিকা ইত্যাদি। এগুলো একত্রিত হয়ে পুরো ওয়েবসাইটের UI তৈরি হয়।
কেন কম্পোনেন্ট ব্যবহার করা হয়?
পুনঃব্যবহারযোগ্যতা (Reusability): একবার একটি কম্পোনেন্ট তৈরি করলে তা বিভিন্ন স্থানে ব্যবহার করা যায়।
পাঠযোগ্যতা বৃদ্ধি (Maintainability): বড় প্রজেক্টে ছোট ছোট কম্পোনেন্টে ভেঙ্গে কাজ করলে কোড সহজে বুঝা যায় এবং পরিচালনা করা যায়।
ডাটা ম্যানেজমেন্ট (Data Management): প্রপস এবং স্টেটের মাধ্যমে ডাটা আদান-প্রদান সহজ হয়।
উদাহরণ:
ধরি, আমরা একটি লিস্টের বিভিন্ন খাবারের নাম কম্পোনেন্টের মাধ্যমে প্রদর্শন করতে চাই। নিচের উদাহরণটি দেখুন:

function Food(props) {
    return (
        <li>{props.foodName}</li>
    );
}

function App() {
    return (
        <ul>
            <Food foodName="Orange" />
            <Food foodName="Banana" />
            <Food foodName="Apple" />
        </ul>
    );
}

export default App;

এখানে, Food হলো একটি ফাংশনাল কম্পোনেন্ট যা props থেকে খাবারের নাম গ্রহণ করছে এবং তা <li> ট্যাগের মধ্যে প্রদর্শন করছে।
