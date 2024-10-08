# React + Vite

This is my React leaning Day One 

What is react?  

Ans: React একটি জাভাস্ক্রিপ্ট লাইব্রেরি, যা মূলত ইউজার ইন্টারফেস বা UI তৈরির জন্য ব্যবহৃত হয়। এটি ফেসবুক দ্বারা তৈরি এবং রক্ষণাবেক্ষণ করা হয়েছে। React ডেভেলপারদের বড় অ্যাপ্লিকেশনগুলির জন্য দ্রুত এবং দক্ষভাবে UI কম্পোনেন্ট তৈরি করতে সাহায্য করে, যেগুলি ডাটা পরিবর্তনের সাথে সাথে স্বয়ংক্রিয়ভাবে আপডেট হয়। React-এ কম্পোনেন্ট ভিত্তিক আর্কিটেকচার ব্যবহার করা হয়, যেখানে UI অংশগুলো ছোট ছোট পুনঃব্যবহারযোগ্য কম্পোনেন্টে ভাগ করা হয়। এটি ভার্চুয়াল DOM ব্যবহার করে দ্রুত আপডেট করতে সহায়তা করে, ফলে পারফরমেন্স উন্নত হয়।
সারাংশে, React হল এমন একটি টুল যা ডেভেলপারদের জটিল এবং ইন্টারেকটিভ ওয়েব অ্যাপ্লিকেশন তৈরি করতে সহায়তা করে, সহজ এবং পুনঃব্যবহারযোগ্য কোড লিখে।


how to install it ?


১. Node.js ইনস্টল করা
React ইনস্টল করার জন্য প্রথমে আপনার কম্পিউটারে Node.js ইনস্টল করতে হবে, কারণ React প্রজেক্টে npm (Node Package Manager) ব্যবহার করা হয়। Node.js ইনস্টল করার জন্য:
Node.js অফিসিয়াল ওয়েবসাইট থেকে আপনার অপারেটিং সিস্টেমের জন্য উপযুক্ত সংস্করণটি ডাউনলোড এবং ইনস্টল করুন।

২. Vite ব্যবহার করে React প্রজেক্ট তৈরি করা
ধাপ ১: একটি নতুন প্রজেক্ট তৈরি করতে Vite এর কমান্ড ব্যবহার করুন:

npm create vite@latest my-app

এখানে my-app আপনার প্রজেক্টের নাম। আপনি ইচ্ছা করলে অন্য নাম দিতে পারেন।
ধাপ ২: প্রম্পট আসলে React বেছে নিন, এবং তারপর JavaScript বা TypeScript এর মধ্যে যেটি ব্যবহার করতে চান সেটি নির্বাচন করুন।

✔ Project name: … my-app
✔ Select a framework: » React
✔ Select a variant: » JavaScript / TypeScript

ধাপ ৩: প্রজেক্ট ফোল্ডারে যান:
bash
cd my-app

ধাপ ৪: প্রয়োজনীয় প্যাকেজগুলো ইনস্টল করতে এই কমান্ডটি চালান:
bash
npm install

ধাপ ৫: আপনার React প্রজেক্ট চালু করতে:
bash

npm run dev

এটি আপনার ব্রাউজারে http://localhost:5173 ঠিকানায় অ্যাপটি চালু করবে।
৩. Vite প্রজেক্ট স্ট্রাকচার
Vite প্রজেক্ট স্ট্রাকচারটি সাধারণত নিম্নরূপ হবে:

my-app/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md

৪. React কোড সম্পাদনা করা
src/App.jsx ফাইলটি খোলেন এবং সেখানে React কম্পোনেন্টগুলো তৈরি করতে শুরু করতে পারেন। Vite খুব দ্রুত পরিবর্তনগুলো রিফ্রেশ করে এবং ডেভেলপমেন্ট প্রক্রিয়াটি দ্রুততর করে।
এভাবেই Vite ব্যবহার করে দ্রুত এবং দক্ষভাবে React প্রজেক্ট সেটআপ করা যায়।


Discuss about different file and folder

1. public ফোল্ডার
ব্যাখ্যা:
public ফোল্ডারটি এমন ফাইল রাখার জন্য ব্যবহৃত হয় যেগুলি সরাসরি ব্রাউজারে অ্যাক্সেসযোগ্য হবে এবং Vite বা Webpack এর মতো টুলগুলি দ্বারা প্রসেস করা হয় না।
কী থাকবে এখানে:
স্ট্যাটিক ফাইলগুলো যেমন ছবি, ফন্ট, favicon ইত্যাদি।
index.html: এই ফাইলটিও public ফোল্ডারে থাকতে পারে এবং এটি মূল HTML ফাইল যা ব্রাউজারে লোড করা হয়।
এই ফোল্ডারের যেকোনো ফাইল পরিবর্তন ছাড়াই ব্রাউজারে পরিবেশন করা হয়।
2. src ফোল্ডার (Source Code)
ব্যাখ্যা:
src ফোল্ডারে প্রজেক্টের মূল কোড থাকে। এখানে আপনার সমস্ত React কম্পোনেন্ট, স্টাইলশীট, এবং লজিক্যাল ফাইল থাকে। সাধারণত, এই ফোল্ডারটিই হলো প্রজেক্টের হৃদয় যেখানে ডেভেলপাররা কাজ করেন।
কী থাকবে এখানে:
App.jsx: প্রধান React কম্পোনেন্ট যেখানে আপনার অ্যাপ্লিকেশনের লজিক এবং UI তৈরি হয়।
main.jsx: এখানে অ্যাপ্লিকেশনের মূল JavaScript কোড থাকে যা অ্যাপ্লিকেশন শুরু করে। এটি React-এর ReactDOM.render ব্যবহার করে অ্যাপ্লিকেশনকে index.html-এ রেন্ডার করে।
CSS ফাইল: অ্যাপ্লিকেশনের স্টাইলশীট এখানে থাকে (যেমন index.css), যেখানে স্টাইলিং কোড লেখা হয়।
3. index.html (প্রধান HTML ফাইল)
ব্যাখ্যা:
index.html হলো প্রজেক্টের মূল HTML ফাইল যা ব্রাউজারে প্রথমে লোড হয়। এই ফাইলের মধ্যে একটি <div id="root"></div> থাকে, যেখানে React অ্যাপটি ইনজেক্ট করা হয়।
কী হবে এতে:
React অ্যাপ্লিকেশনের জন্য বেসিক HTML কাঠামো।
React কম্পোনেন্টগুলো এই HTML ফাইলের ভিতর রেন্ডার করা হয়।
আপনি চাইলে এটির মধ্যে মেটা ডেটা, ফেভিকন, বা অন্য যেকোনো স্ট্যাটিক উপাদান যোগ করতে পারেন।
Vite এই ফাইলটিকে প্রসেস করে এবং প্রজেক্টের বিভিন্ন অংশ লোড করে।
4. package.json (প্যাকেজ ম্যানেজমেন্ট ফাইল)
ব্যাখ্যা:
package.json ফাইলটি প্রজেক্টের মেটা ডেটা ধারণ করে, যেমন প্রজেক্টের নাম, সংস্করণ, প্রয়োজনীয় প্যাকেজগুলো, স্ক্রিপ্টগুলো, এবং অন্যান্য নির্ভরশীলতা।
কী থাকবে এতে:
dependencies: এখানে আপনার অ্যাপ্লিকেশনের জন্য ইনস্টল করা লাইব্রেরি এবং প্যাকেজগুলোর নাম এবং সংস্করণ থাকে।
devDependencies: এখানে ডেভেলপমেন্ট সময়ের জন্য প্রয়োজনীয় প্যাকেজগুলো থাকে (যেমন Vite, ESLint)।
scripts: এখানে কিছু কমান্ড থাকে, যেমন npm run dev যা ডেভেলপমেন্ট সার্ভার চালায়, এবং npm run build যা প্রজেক্টের প্রোডাকশন বিল্ড তৈরি করে।
প্রজেক্টের প্রয়োজনীয় সেটআপ এবং টুলিং এর বিবরণ।
5. vite.config.js (Vite কনফিগারেশন ফাইল)
ব্যাখ্যা:
vite.config.js ফাইলটি Vite এর জন্য কনফিগারেশন সেটিংস ধারণ করে। এটি Vite-কে বলে কীভাবে প্রজেক্টটি বিল্ড এবং ডেভেলপমেন্ট পরিবেশে পরিচালনা করতে হবে।
কী থাকবে এতে:
বিভিন্ন কনফিগারেশন সেটিংস: যেমন অ্যাপ্লিকেশনের বিল্ড পাথ, প্লাগইন কনফিগারেশন, এবং পরিবেশ সম্পর্কিত সেটিংস।
Vite এর বিভিন্ন প্লাগইন বা লোডার ব্যবহার করা হলে সেই কনফিগারেশন এখানে উল্লেখ করা হয়।
vite.config.js ফাইলটি কাস্টমাইজেশন করতে বা বিশেষ ধরনের ফিচার যোগ করতে ব্যবহৃত হয়।
সারসংক্ষেপে:
public/ ফোল্ডারে সরাসরি পরিবেশনযোগ্য ফাইলগুলো থাকে।
src/ ফোল্ডারে আপনার অ্যাপ্লিকেশনের সমস্ত সোর্স কোড এবং লজিক থাকে।
index.html হলো মূল HTML ফাইল, যেখানে React অ্যাপটি রেন্ডার করা হয়।
package.json প্রজেক্টের জন্য প্রয়োজনীয় নির্ভরশীলতা এবং স্ক্রিপ্ট ধারণ করে।
vite.config.js Vite এর জন্য প্রজেক্ট কনফিগারেশন সেটিংস ধরে রাখে।
Vite ব্যবহারের সুবিধা হলো এটি খুব দ্রুত ডেভেলপমেন্ট এবং হালকা কনফিগারেশন দেয়, ফলে React এর কাজ করা অনেক সহজ হয়।
What is Vite?
Vite হল একটি আধুনিক বিল্ড টুল, যা দ্রুত এবং কার্যকর ডেভেলপমেন্ট পরিবেশ তৈরি করতে সহায়তা করে। এটি মূলত জাভাস্ক্রিপ্ট অ্যাপ্লিকেশন, বিশেষত ফ্রন্ট-এন্ড ফ্রেমওয়ার্কগুলোর জন্য তৈরি করা হয়েছে, যেমন React, Vue, Svelte ইত্যাদি। Vite এর প্রধান লক্ষ্য হল দ্রুত সার্ভার রেসপন্স এবং দ্রুত বিল্ড সময় প্রদান করা, যা ডেভেলপারদের আরও কার্যকরভাবে কাজ করতে সহায়তা করে।
Vite-এর মূল বৈশিষ্ট্য:
দ্রুত ডেভেলপমেন্ট সার্ভার: Vite ক্লাসিক ডেভেলপমেন্ট টুলের মতো ব্রাউজারে প্রতিটি জাভাস্ক্রিপ্ট ফাইল বাণ্ডলিং করে না। পরিবর্তে, এটি ইএস মডিউল (ESM) ব্যবহার করে এবং শুধুমাত্র সেই ফাইলটি সরবরাহ করে যেটি প্রয়োজন। এর ফলে ডেভেলপমেন্ট সার্ভার দ্রুত লোড হয় এবং তাৎক্ষণিক পরিবর্তন দেখা যায় (Hot Module Replacement - HMR)।
বিল্ড প্রসেস দ্রুত করা: প্রোডাকশন বিল্ড তৈরি করার সময়, Vite Rollup এর মতো টুল ব্যবহার করে অ্যাপ্লিকেশনকে অপ্টিমাইজ করে। এর ফলে প্রোডাকশন বিল্ডও দ্রুত হয়।
মডার্ন ব্রাউজার টার্গেট: Vite শুধুমাত্র আধুনিক ব্রাউজারগুলিকে লক্ষ্য করে, যা ইএস মডিউল (ESM) সমর্থন করে। ফলে এটি পুরোনো জাভাস্ক্রিপ্ট সিনট্যাক্স এবং পলিফিল নিয়ে চিন্তা করে না, যা অনেক দ্রুত অ্যাপ্লিকেশন লোড হতে সাহায্য করে।
প্লাগইন সাপোর্ট: Vite বিভিন্ন প্লাগইন এবং কাস্টমাইজেশন সমর্থন করে, যা অ্যাপ্লিকেশনের বিল্ড প্রসেস কাস্টমাইজ করতে দেয়।
একাধিক ফ্রেমওয়ার্ক সাপোর্ট: Vite Vue, React, Preact, Svelte ইত্যাদি ফ্রেমওয়ার্কের জন্য তৈরি করা হয়েছে। এটি সহজেই এসব ফ্রেমওয়ার্কের সঙ্গে কাজ করে।
Vite কীভাবে কাজ করে?
ডেভেলপমেন্ট সার্ভার: ডেভেলপমেন্ট সময়ে Vite শুধুমাত্র আপনি যে মডিউলটি পরিবর্তন করছেন সেটি সার্ভ করে। এর ফলে যখন আপনি কোড পরিবর্তন করেন, তখন সেই পরিবর্তন দ্রুত ব্রাউজারে প্রতিফলিত হয়।
হট মডিউল রিপ্লেসমেন্ট (HMR): যখন আপনি আপনার কোডে পরিবর্তন করেন, Vite সেই পরিবর্তিত অংশটুকুই পুনরায় লোড করে, পুরো অ্যাপ্লিকেশন নয়। এর ফলে তাৎক্ষণিক প্রতিক্রিয়া পাওয়া যায়।
প্রোডাকশন বিল্ড: প্রোডাকশন বিল্ডের জন্য Vite Rollup ব্যবহার করে যা একটি একক প্যাকেজে সমস্ত মডিউল যুক্ত করে এবং প্রয়োজনীয় অপ্টিমাইজেশন করে।
Vite কেন ব্যবহার করবেন?
দ্রুত স্টার্টআপ: অন্য বিল্ড টুলগুলোর তুলনায় Vite প্রজেক্ট দ্রুত চালু হয়।
দ্রুত রিফ্রেশ টাইম: পরিবর্তন করার পর দ্রুত ফলাফল দেখা যায়, যা ডেভেলপমেন্টকে আরও দক্ষ করে।
সহজ কনফিগারেশন: সহজেই কনফিগারেশন করা যায় এবং প্রয়োজনমতো কাস্টমাইজ করা সম্ভব।
আধুনিক প্রযুক্তির সাথে সামঞ্জস্যপূর্ণ: Vite আধুনিক ES মডিউল ব্যবহার করে এবং নতুন ব্রাউজার ফিচারগুলো সমর্থন করে।
সারসংক্ষেপে:
Vite হল একটি দ্রুত, মডার্ন বিল্ড টুল যা ফ্রন্ট-এন্ড ডেভেলপমেন্টকে দ্রুত এবং আরও কার্যকর করে তোলে, বিশেষত যখন আপনি React, Vue, বা Svelte-এর মতো ফ্রেমওয়ার্ক দিয়ে কাজ করছেন।

what is main.jsx


React প্রজেক্টে, বিশেষ করে Vite-এর মতো টুল ব্যবহার করা হলে, main.jsx সাধারণত অ্যাপ্লিকেশনের এন্ট্রি পয়েন্ট হিসেবে কাজ করে। এই ফাইলটি মূল React কম্পোনেন্ট (সাধারণত App নামে পরিচিত) DOM-এ (Document Object Model) রেন্ডার করার দায়িত্বে থাকে, যার মাধ্যমে ব্যবহারকারী আপনার ওয়েব অ্যাপ্লিকেশনের সাথে ইন্টারঅ্যাক্ট করে।
main.jsx এর ভূমিকা:
১. মূল কম্পোনেন্ট (App) রেন্ডার করা:
main.jsx সেই ফাইল যা আপনার মূল React কম্পোনেন্ট (যেমন App) এবং পুরো অ্যাপ্লিকেশনটিকে DOM এর মধ্যে রেন্ডার করে। এর ফলে ব্যবহারকারীরা অ্যাপ্লিকেশন দেখতে এবং ব্যবহার করতে পারে।
২. DOM-এর সাথে সংযোগ স্থাপন করা:
এই ফাইলটি HTML ফাইলের একটি নির্দিষ্ট এলিমেন্টের সাথে React অ্যাপ্লিকেশনকে যুক্ত করে। সাধারণত index.html ফাইলের <div id="root"></div> এর মধ্যে React অ্যাপ্লিকেশন রেন্ডার করা হয়।
৩. React এর প্রাথমিক সেটআপ:
main.jsx ফাইলটি React এর প্রাথমিক সেটআপ করে। এতে ReactDOM.createRoot বা ReactDOM.render ব্যবহার করে অ্যাপ্লিকেশনটি DOM এ যোগ করা হয়।
উদাহরণ:
ধরা যাক main.jsx এর সাধারণ গঠন:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
 <StrictMode>
   <App />
 </StrictMode>,
)


৪. ReactDOM.createRoot ব্যবহার:
এখানে ReactDOM.createRoot React অ্যাপ্লিকেশনকে HTML এর একটি নির্দিষ্ট অংশে রেন্ডার করতে ব্যবহৃত হয়, যা সাধারণত <div id="root"></div>।
সারাংশ:
main.jsx ফাইলটি React অ্যাপ্লিকেশনের মূল এন্ট্রি পয়েন্ট, যা আপনার অ্যাপের শুরুতে React কম্পোনেন্টগুলোকে DOM এ রেন্ডার করে এবং ব্যবহারকারীকে অ্যাপ্লিকেশনের ইন্টারফেস দেখায়।


React কম্পোনেন্ট

React কম্পোনেন্ট হল React এর মূল ধারণাগুলোর একটি, যা UI (ইউজার ইন্টারফেস) তৈরির জন্য পুনঃব্যবহারযোগ্য, স্বতন্ত্র অংশ বা ব্লক হিসেবে কাজ করে। React কম্পোনেন্টগুলো আলাদা আলাদা উপাদান হিসেবে UI গঠনে ব্যবহৃত হয়, যা একটি ওয়েব অ্যাপ্লিকেশনের বিভিন্ন অংশ বা ফিচারকে উপস্থাপন করে।
React কম্পোনেন্ট কীভাবে কাজ করে?
React কম্পোনেন্টগুলিকে আপনি JavaScript ফাংশন বা ক্লাস হিসেবে চিন্তা করতে পারেন, যা HTML এবং JavaScript মিশিয়ে UI-এর নির্দিষ্ট অংশকে রেন্ডার করে। প্রতিটি কম্পোনেন্ট একটি নির্দিষ্ট UI অংশের জন্য দায়ী এবং এটি স্বাধীনভাবে কাজ করে।
React কম্পোনেন্টের বৈশিষ্ট্য:
পুনঃব্যবহারযোগ্য: একবার একটি কম্পোনেন্ট তৈরি করা হলে, সেটি অ্যাপ্লিকেশনের যেকোনো স্থানে ব্যবহার করা যায়।
স্বতন্ত্র (Independent): প্রতিটি কম্পোনেন্ট আলাদা, ফলে একটি কম্পোনেন্টের পরিবর্তন অন্য কম্পোনেন্টে প্রভাব ফেলে না।
স্টেটফুল বা স্টেটলেস: কম্পোনেন্টগুলো স্টেট (state) ধারণ করতে পারে বা শুধু props-এর মাধ্যমে ডেটা গ্রহণ করে ব্যবহার করতে পারে।
দুই ধরনের React কম্পোনেন্ট:
ফাংশনাল কম্পোনেন্ট (Functional Component): ফাংশনাল কম্পোনেন্টগুলি JavaScript ফাংশন হিসেবে কাজ করে এবং UI রেন্ডার করে। এরা সাধারণত props নামে আর্গুমেন্ট গ্রহণ করে এবং JSX (JavaScript XML) রিটার্ন করে।
উদাহরণ:
function Welcome(props) {
 return <h1>Hello, {props.name}</h1>;
}

2.ক্লাস কম্পোনেন্ট (Class Component): ক্লাস কম্পোনেন্টগুলি ES6 ক্লাসের ওপর ভিত্তি করে তৈরি হয় এবং তাদের মধ্যে state এবং lifecycle মেথডগুলো ব্যবহার করা যায়। তবে, আধুনিক React প্রজেক্টগুলোতে সাধারণত ফাংশনাল কম্পোনেন্ট এবং Hooks ব্যবহার বেশি প্রচলিত।
class Welcome extends React.Component {
 render() {
   return <h1>Hello, {this.props.name}</h1>;
 }
}


JSX (JavaScript XML):
React কম্পোনেন্টের মধ্যে সাধারণত JSX ব্যবহার করা হয়, যা HTML এবং JavaScript একসাথে লেখার একটি সুবিধাজনক উপায়। JSX দেখতে HTML এর মতো হলেও এটি JavaScript এর মধ্যেই থাকে।



function Header() {
 return (
   <header>
     <h1>Welcome to My Website</h1>
   </header>
 );
}



Props (Properties):
React কম্পোনেন্টে props হলো ডেটা যা প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে পাঠানো হয়। এটি readonly এবং শুধুমাত্র ডেটা দেখানোর জন্য ব্যবহৃত হয়।
উদাহরণ:

function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

<Greeting name="John" />

State:
State হলো কম্পোনেন্টের নিজস্ব ডেটা যা পরিবর্তনযোগ্য এবং ব্যবহারকারীর ইন্টারঅ্যাকশন অনুযায়ী আপডেট হয়।
উদাহরণ:

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

সারসংক্ষেপ:
React কম্পোনেন্ট হলো একটি পুনঃব্যবহারযোগ্য UI অংশ, যা ফাংশন বা ক্লাস হিসেবে তৈরি করা হয় এবং ডেটা (props, state) ব্যবহার করে UI-কে রেন্ডার করে। React অ্যাপ্লিকেশন সাধারণত বিভিন্ন ছোট ছোট কম্পোনেন্টের সমন্বয়ে তৈরি করা হয়, যা একত্রে একটি পূর্ণাঙ্গ ওয়েব অ্যাপ্লিকেশন তৈরি করে।


React কম্পোনেন্টে CSS ব্যবহার করার বিভিন্ন উপায় রয়েছে। আপনি আপনার অ্যাপ্লিকেশনের স্টাইলিং এর জন্য বিভিন্ন পদ্ধতি ব্যবহার করতে পারেন যেমন: সাধারণ CSS ফাইল, ইনলাইন স্টাইল, CSS মডিউল, বা স্টাইলড কম্পোনেন্ট। প্রতিটি পদ্ধতির নিজস্ব সুবিধা এবং ব্যবহারিক দিক রয়েছে। নিচে প্রতিটি পদ্ধতি ব্যাখ্যা করা হলো:
১. সাধারণ CSS ফাইল ব্যবহার করে
ধাপ ১: CSS ফাইল তৈরি করা
আপনি সাধারণভাবে একটি CSS ফাইল তৈরি করতে পারেন এবং সেটি React কম্পোনেন্টে ইম্পোর্ট করতে পারেন।
উদাহরণস্বরূপ, একটি CSS ফাইল তৈরি করুন App.css নামে:

/* App.css */
.header {
  background-color: lightblue;
  text-align: center;
  padding: 20px;
}

h1 {
  color: darkblue;
}

ধাপ ২: CSS ফাইল ইম্পোর্ট করা
এখন App.jsx ফাইল বা অন্য যেকোনো কম্পোনেন্টে এই CSS ফাইলটি ইম্পোর্ট করুন এবং ক্লাস ব্যবহার করুন:
jsx
Copy code
import React from 'react';
import './App.css'; // CSS ফাইল ইম্পোর্ট

function Header() {
  return (
    <header className="header">
      <h1>Welcome to My Website</h1>
    </header>
  );
}

export default Header;

২. ইনলাইন স্টাইলিং
React এ স্টাইল অ্যাপ্লাই করার আরেকটি সহজ উপায় হল ইনলাইন স্টাইল ব্যবহার করা। এটি সরাসরি JSX এর মধ্যে style অ্যাট্রিবিউটের মাধ্যমে লেখা হয়, যা একটি জাভাস্ক্রিপ্ট অবজেক্ট হিসেবে দেওয়া হয়।
উদাহরণ:

function Header() {
  const headerStyle = {
    backgroundColor: 'lightblue',
    textAlign: 'center',
    padding: '20px'
  };

  const titleStyle = {
    color: 'darkblue'
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Welcome to My Website</h1>
    </header>
  );
}

export default Header;

৩. CSS মডিউল ব্যবহার করে
CSS মডিউল ব্যবহার করে আপনি প্রতিটি কম্পোনেন্টে নির্দিষ্ট স্টাইল করতে পারেন, যেখানে স্টাইলগুলি লোকাল স্কোপে থাকে এবং অন্য কম্পোনেন্টের সাথে কনফ্লিক্ট করে না।
ধাপ ১: CSS মডিউল তৈরি করা
একটি CSS মডিউল ফাইল তৈরি করুন Header.module.css নামে:
/* Header.module.css */
.header {
  background-color: lightblue;
  text-align: center;
  padding: 20px;
}

.title {
  color: darkblue;
}

ধাপ ২: CSS মডিউল ইম্পোর্ট করা এবং ব্যবহার করা
এখন Header.jsx কম্পোনেন্টে CSS মডিউল ইম্পোর্ট করে ক্লাসগুলো ব্যবহার করুন:
jsx
Copy code
import React from 'react';
import styles from './Header.module.css'; // CSS মডিউল ইম্পোর্ট

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Welcome to My Website</h1>
    </header>
  );
}

export default Header;

৪. Styled Components ব্যবহার করে
Styled Components একটি CSS-in-JS লাইব্রেরি যা স্টাইলগুলোকে কম্পোনেন্টের মধ্যে সরাসরি লেখার সুবিধা দেয়। এটি আপনাকে প্রতিটি কম্পোনেন্টে স্টাইল অ্যাপ্লাই করতে এবং স্কোপড স্টাইলিং করতে সহায়তা করে।
প্রথমে, styled-components লাইব্রেরিটি ইনস্টল করতে হবে:
npm install styled-components

এরপর, আপনার কম্পোনেন্টে styled-components ব্যবহার করতে পারেন:
import React from 'react';
import styled from 'styled-components'; // styled-components ইম্পোর্ট

const HeaderWrapper = styled.header`
  background-color: lightblue;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: darkblue;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Title>Welcome to My Website</Title>
    </HeaderWrapper>
  );
}

export default Header;

সারসংক্ষেপ:
React কম্পোনেন্টে CSS স্টাইলিং করতে অনেকগুলি উপায় আছে:
সাধারণ CSS ফাইল ইম্পোর্ট করে।
ইনলাইন স্টাইল ব্যবহার করে।
CSS মডিউল ব্যবহার করে।
Styled Components লাইব্রেরি ব্যবহার করে।
আপনার অ্যাপ্লিকেশনের আকার এবং প্রয়োজন অনুসারে যে পদ্ধতিটি আপনার জন্য সবচেয়ে উপযোগী মনে হয়, সেটি ব্যবহার করতে পারেন।

Props

What is props and why it is used?

Props (short for "properties") হল React কম্পোনেন্টগুলিতে ডেটা পাঠানোর একটি উপায়। props ব্যবহার করে আপনি প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে ডেটা পাঠাতে পারেন। Props হলো readonly, অর্থাৎ চাইল্ড কম্পোনেন্টের মধ্যে এগুলোর মান পরিবর্তন করা যায় না।
React এ props খুবই গুরুত্বপূর্ণ, কারণ এটি ডায়নামিক ডেটা পাঠানোর মাধ্যমে কম্পোনেন্টগুলোকে আরও পুনঃব্যবহারযোগ্য করে তোলে।
Props কীভাবে কাজ করে?
১. প্যারেন্ট কম্পোনেন্ট থেকে ডেটা পাঠানো:
আপনি প্যারেন্ট কম্পোনেন্টে চাইল্ড কম্পোনেন্টের মধ্যে props হিসেবে ডেটা পাঠান।
২. চাইল্ড কম্পোনেন্টে props গ্রহণ করা:
চাইল্ড কম্পোনেন্ট সেই props গ্রহণ করে এবং UI তে ব্যবহার করে।

উদাহরণ দিয়ে Props বোঝানো:
ধাপ ১: প্যারেন্ট কম্পোনেন্টে Props পাঠানো

import React from 'react';
import Greeting from './Greeting'; // Greeting কম্পোনেন্ট ইম্পোর্ট করা

function App() {
  return (
    <div>
      <Greeting name="John" age={25} />
    </div>
  );
}

export default App;

এখানে, Greeting কম্পোনেন্টকে name এবং age নামে দুটি props পাঠানো হয়েছে।
ধাপ ২: চাইল্ড কম্পোনেন্টে Props গ্রহণ করা

import React from 'react';

function Greeting(props) {  // এখানে props গ্রহণ করা
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Your age is {props.age}.</p>
    </div>
  );
}

export default Greeting;

এখানে, Greeting কম্পোনেন্টে props.name এবং props.age ব্যবহার করা হয়েছে। props অবজেক্ট থেকে আপনি যে ডেটা পেয়েছেন তা UI তে দেখাতে পারবেন।
কীভাবে Props কাজ করে:
প্যারেন্ট কম্পোনেন্ট (App):
Greeting কম্পোনেন্টকে name এবং age পাঠাচ্ছে।
চাইল্ড কম্পোনেন্ট (Greeting):
props প্যারামিটার হিসেবে গ্রহণ করছে এবং সেই ডেটা UI তে প্রদর্শন করছে।
শর্টার সিনট্যাক্স:
React এ আপনি ডিরেক্টলি props থেকে নির্দিষ্ট প্রপার্টি গ্রহণ করতে পারেন, যাকে destructuring বলে।

function Greeting({ name, age }) {  // props এর পরিবর্তে ডিরেক্ট ভাবে name, age নেওয়া
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Your age is {age}.</p>
    </div>
  );
}

Props এর উপযোগিতা:
পুনঃব্যবহারযোগ্য কম্পোনেন্ট: আপনি একই কম্পোনেন্টকে বিভিন্ন ডেটা দিয়ে বিভিন্ন জায়গায় ব্যবহার করতে পারেন।
ডায়নামিক ডেটা: Props ব্যবহার করে আপনি ডায়নামিক ডেটা পাস করতে পারবেন এবং এর ভিত্তিতে UI পরিবর্তন করতে পারবেন।
আরও একটি উদাহরণ:
প্যারেন্ট কম্পোনেন্ট:

function App() {
  return (
    <div>
      <User name="Alice" job="Developer" />
      <User name="Bob" job="Designer" />
    </div>
  );
}

export default App;

চাইল্ড কম্পোনেন্ট:

function User({ name, job }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Job: {job}</p>
    </div>
  );
}

export default User;

এখানে একই User কম্পোনেন্টকে ভিন্ন name এবং job পাঠানো হয়েছে, যা UI-তে আলাদা আউটপুট দেখাবে।
সারসংক্ষেপ:
Props হলো React কম্পোনেন্টে ডেটা পাস করার উপায়।
Props প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে ডেটা পাস করে এবং চাইল্ড কম্পোনেন্ট সেই ডেটা UI তে দেখায়।
Props শুধু পঠনযোগ্য (readonly) এবং চাইল্ড কম্পোনেন্টে ডেটা পরিবর্তন করা যায় না।
Props ব্যবহার করে আপনি আপনার React অ্যাপ্লিকেশনে ডায়নামিক এবং পুনঃব্যবহারযোগ্য কম্পোনেন্ট তৈরি করতে পারবেন।

React এ propTypes এবং defaultProps কম্পোনেন্টের props ব্যবস্থাপনা এবং ডিবাগিং সহজ করতে ব্যবহৃত হয়।
propTypes কী এবং কীভাবে ব্যবহার করবেন
propTypes হল একটি উপায় যা দিয়ে আপনি আপনার কম্পোনেন্টের props গুলোর ডেটা টাইপ চেক করতে পারেন। এটি নিশ্চিত করে যে প্যারেন্ট কম্পোনেন্ট সঠিক ধরনের props পাঠাচ্ছে কিনা। যদি ভুল টাইপের props পাঠানো হয়, তবে কনসোলে একটি সতর্কবার্তা প্রদর্শিত হবে।
propTypes ব্যবহার করার ধাপ:
prop-types প্যাকেজ ইম্পোর্ট করা:
প্রথমে আপনাকে prop-types প্যাকেজটি ইনস্টল করতে হবে যদি এটি ইতিমধ্যে ইনস্টল করা না থাকে:
bash
Copy code
npm install prop-types
তারপর আপনার কম্পোনেন্ট ফাইলে এটি ইম্পোর্ট করুন:
jsx
Copy code
import PropTypes from 'prop-types';


propTypes ডিফাইন করা:
আপনার কম্পোনেন্টে propTypes নির্ধারণ করুন, যেখানে প্রতিটি prop এর জন্য প্রত্যাশিত ডেটা টাইপ উল্লেখ করবেন।
ফাংশনাল কম্পোনেন্টের উদাহরণ:

function Greeting({ name, age }) {
  return (
    <div>
      <h1>হ্যালো, {name}!</h1>
      <p>আপনার বয়স {age}।</p>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired, // name একটি স্ট্রিং এবং আবশ্যক
  age: PropTypes.number,             // age একটি সংখ্যা, ঐচ্ছিক
};

export default Greeting;
ক্লাস কম্পোনেন্টের উদাহরণ:

class Greeting extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
  };

  render() {
    const { name, age } = this.props;
    return (
      <div>
        <h1>হ্যালো, {name}!</h1>
        <p>আপনার বয়স {age}।</p>
      </div>
    );
  }
}

export default Greeting;


উপলভ্য PropTypes টাইপস:
PropTypes.string
PropTypes.number
PropTypes.bool
PropTypes.array
PropTypes.object
PropTypes.func
PropTypes.node
PropTypes.element
PropTypes.symbol
ইত্যাদি
আপনি isRequired অ্যাট্রিবিউট ব্যবহার করে একটি prop আবশ্যক করতে পারেন।
defaultProps কী এবং কীভাবে ব্যবহার করবেন
defaultProps ব্যবহার করে আপনি props এর জন্য ডিফল্ট মান নির্ধারণ করতে পারেন। যদি প্যারেন্ট কম্পোনেন্ট থেকে নির্দিষ্ট কোনো prop না পাঠানো হয়, তাহলে defaultProps এ উল্লেখিত মানটি ব্যবহৃত হবে।
defaultProps ব্যবহার করার ধাপ:
defaultProps ডিফাইন করা:
ফাংশনাল কম্পোনেন্টের উদাহরণ:

function Greeting({ name, age }) {
  return (
    <div>
      <h1>হ্যালো, {name}!</h1>
      <p>আপনার বয়স {age}।</p>
    </div>
  );
}

Greeting.defaultProps = {
  age: ১৮, // age এর ডিফল্ট মান ১৮
};

export default Greeting;
ক্লাস কম্পোনেন্টের উদাহরণ:
class Greeting extends React.Component {
  static defaultProps = {
    age: ১৮,
  };

  render() {
    const { name, age } = this.props;
    return (
      <div>
        <h1>হ্যালো, {name}!</h1>
        <p>আপনার বয়স {age}।</p>
      </div>
    );
  }
}

export default Greeting;


ডিফল্ট Props এর সুবিধা:
আপনি যদি কোনো prop প্যারেন্ট কম্পোনেন্ট থেকে না পাঠান, তবুও কম্পোনেন্ট একটি ডিফল্ট মান ব্যবহার করে কাজ করবে।
কোডের স্থিতিশীলতা বৃদ্ধি পায় এবং অপ্রত্যাশিত undefined বা null মান এড়ানো যায়।
মোটামুটি প্রক্রিয়া:
প্যারেন্ট কম্পোনেন্টে: Greeting কম্পোনেন্টকে name পাঠানো হয়েছে কিন্তু age পাঠানো হয়নি।

function App() {
  return (
    <div>
      <Greeting name="আলিম" />
    </div>
  );
}

export default App;

চাইল্ড কম্পোনেন্টে: age এর ডিফল্ট মান ব্যবহার করা হবে।

function Greeting({ name, age }) {
  return (
    <div>
      <h1>হ্যালো, {name}!</h1>
      <p>আপনার বয়স {age}।</p>
    </div>
  );
}

Greeting.defaultProps = {
  age: ১৮,
};

export default Greeting;

উপসংহার:
propTypes ব্যবহার করে আপনি props এর টাইপ চেক করতে পারবেন, যা ডিবাগিং সহজ করে এবং কোডের স্থায়িত্ব বাড়ায়।
defaultProps ব্যবহার করে আপনি props এর ডিফল্ট মান নির্ধারণ করতে পারবেন, যা কম্পোনেন্টকে আরও রোবাস্ট করে তোলে।
অতিরিক্ত তথ্য:
React ১৫.৫ থেকে propTypes আলাদা prop-types প্যাকেজে সরিয়ে নেওয়া হয়েছে। তাই এটি ব্যবহার করতে prop-types প্যাকেজটি ইনস্টল করা প্রয়োজন।
ফাংশনাল কম্পোনেন্টে defaultProps এর বিকল্প হিসেবে আপনি ফাংশনের প্যারামিটারে ডিফল্ট মান সেট করতে পারেন:

function Greeting({ name, age = ১৮ }) {
  return (
    <div>
      <h1>হ্যালো, {name}!</h1>
      <p>আপনার বয়স {age}।</p>
    </div>
  );
}


তবে defaultProps ব্যবহারে আপনি propTypes এবং defaultProps একসাথে সমন্বিতভাবে ব্যবহার করতে পারবেন।


Conditional Rendering

Conditional Rendering React এ একটি সাধারণ কৌশল, যা নির্দিষ্ট শর্ত অনুযায়ী UI-র বিভিন্ন অংশ প্রদর্শন করার জন্য ব্যবহৃত হয়। React এর মাধ্যমে আপনি জাভাস্ক্রিপ্টের বিভিন্ন কন্ডিশনাল লজিক (যেমন if-else, টার্নারি অপারেটর ? :, এবং && অপারেটর) ব্যবহার করে কম্পোনেন্টগুলিকে শর্তসাপেক্ষে রেন্ডার করতে পারেন।
১. if-else ব্যবহার করে
React এ আপনি সরাসরি if-else ব্যবহার করতে পারেন শর্ত অনুযায়ী কোন কম্পোনেন্ট রেন্ডার করতে হবে তা নির্ধারণ করতে।

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}

এখানে, যদি isLoggedIn true হয়, তাহলে "Welcome back!" মেসেজটি দেখাবে, আর যদি false হয়, তাহলে "Please log in." মেসেজটি দেখাবে।
২. টার্নারি অপারেটর ব্যবহার করে
টার্নারি অপারেটর (ternary operator) একটি ছোট এবং সহজ উপায় শর্তসাপেক্ষ রেন্ডারিং করার জন্য।

function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
    </div>
  );
}

এখানে, isLoggedIn যদি true হয় তাহলে "Welcome back!" দেখাবে, আর যদি false হয় তাহলে "Please log in." দেখাবে।

৩. লজিক্যাল AND (&&) অপারেটর ব্যবহার করে
React এ আপনি && অপারেটর ব্যবহার করতে পারেন যেখানে আপনি কোনো শর্ত পূরণ হলে একটি উপাদান রেন্ডার করতে চান। && অপারেটর ব্যবহার করে আপনি শর্ত পূরণ না হলে কিছুই রেন্ডার করবেন না।

function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn && <h1>Welcome back!</h1>}
      {!isLoggedIn && <h1>Please log in.</h1>}
    </div>
  );
}

এখানে, যদি isLoggedIn true হয় তাহলে শুধু "Welcome back!" দেখাবে। যদি false হয়, তাহলে "Please log in." দেখাবে।

৪. শর্তসাপেক্ষ ভেরিয়েবল ব্যবহার করে
আপনি ভেরিয়েবলের মাধ্যমে UI অংশ রেন্ডার করতে পারেন এবং পরে JSX-এ সেই ভেরিয়েবলটি রেন্ডার করতে পারেন।

function Greeting({ isLoggedIn }) {
  let message;

  if (isLoggedIn) {
    message = <h1>Welcome back!</h1>;
  } else {
    message = <h1>Please log in.</h1>;
  }

  return <div>{message}</div>;
}

এখানে, message ভেরিয়েবলটি শর্ত অনুযায়ী ভিন্ন ভিন্ন মান গ্রহণ করবে এবং পরে JSX-এ রেন্ডার হবে।
৫. IIFE (Immediately Invoked Function Expression) ব্যবহার করে
আপনি একটি ফাংশনকে ইনলাইনেই কল করতে পারেন শর্ত পূরণ হওয়া মাত্র একটি নির্দিষ্ট আউটপুট প্রদর্শনের জন্য।

function Greeting({ isLoggedIn }) {
  return (
    <div>
      {(() => {
        if (isLoggedIn) {
          return <h1>Welcome back!</h1>;
        } else {
          return <h1>Please log in.</h1>;
        }
      })()}
    </div>
  );
}

Conditional Rendering কেন ব্যবহার করবেন?
ডায়নামিক UI: ব্যবহারকারীর ক্রিয়াকলাপ বা ডেটার উপর ভিত্তি করে UI এর অংশগুলি পরিবর্তন করতে হবে।
লজিক্যাল নিয়ন্ত্রণ: একাধিক পরিস্থিতিতে বিভিন্ন কম্পোনেন্ট রেন্ডার করতে চাইলে, কন্ডিশনাল রেন্ডারিং খুবই উপকারী।
সারসংক্ষেপ:
React-এ Conditional Rendering এর মাধ্যমে আপনি কন্ডিশন অনুযায়ী বিভিন্ন UI উপাদান দেখাতে পারবেন। React এই প্রক্রিয়াটি সহজ করে, যেখানে আপনি if-else, টার্নারি অপারেটর, এবং && অপারেটর ব্যবহার করে শর্তের ভিত্তিতে JSX অংশ রেন্ডার করতে পারবেন। Conditional Rendering আপনার React অ্যাপ্লিকেশনকে আরও ইন্টারঅ্যাক্টিভ এবং ডায়নামিক করে তোলে।

