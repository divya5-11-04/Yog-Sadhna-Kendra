import React, { useEffect, useState } from "react";
interface GoalContent {
video: string;
desc: string;
}
const contentMap: Record<string, GoalContent> = {
"Improve Eyesight":{

video: "https://www.youtube.com/embed/NTZwzoxnLS0",
desc:
"Improve your eyesight with blinking exercises, eye yog, and proper nutrition like vitamin A and lutein. Avoid screen fatigue.",
},
"Improve Height": {
video: "https://www.youtube.com/embed/O_f-WKguQVo",
desc:
"Stretching, nutrition, posture correction, and sleep help improve height naturally, especially during growth years.",
},
"Weight Loss": {
video: "https://www.youtube.com/embed/H3jJ29oE8Zg",
desc:
"Lose weight by creating a sustainable calorie deficit with a proper diet, daily movement, and strong mental focus.",
},
"Weight Gain": {
video: "https://www.youtube.com/embed/RJF5eCXYzK8",
desc:
"Gain weight through calorie surplus, protein intake, and strength workouts. Track your progress and be consistent.",
},
};

const Roadmap: React.FC = () => {
const [goal, setGoal] = useState<string | null>(null);

useEffect(() => {
const selected = localStorage.getItem("selectedGoal");
setGoal(selected);
}, []);

if (!goal || !contentMap[goal]) {
return (
<div className="flex items-center justify-center h-screen text-xl font-semibold">
No goal selected.
</div>
);
}

const { video, desc } = contentMap[goal];

return (
<div className="min-h-screen bg-white p-6">
<h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">{goal} Roadmap</h1>
<div className="max-w-4xl mx-auto bg-gray-100 shadow-lg p-6 rounded-lg">
<div className="w-full aspect-w-16 aspect-h-9 mb-6">
<iframe className="w-full h-64 rounded-lg" src={video} frameBorder="0" allowFullScreen title="Goal Video" ></iframe>
</div>
<p className="text-lg leading-relaxed text-gray-700">{desc}</p>
</div>
</div>
);
};

export default Roadmap;