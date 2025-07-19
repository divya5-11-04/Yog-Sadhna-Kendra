import React from "react";
import { useNavigate } from "react-router-dom";

const GoalSelection: React.FC = () => {
    const navigate = useNavigate();

    const handleSelect = (goal: string) => {
        localStorage.setItem("selectedGoal", goal);
        navigate("/roadmap");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <h1 className="text-3xl font-bold mb-8">What's Your Wellness Goal?</h1>
            <div className="grid grid-cols-2 gap-4">
                {["Improve Eyesight", "Improve Height", "Weight Loss", "Weight Gain"].map((goal) => (
                    <button
                        key={goal}
                        onClick={() => handleSelect(goal)}
                        className="px-4 py-2 text-white rounded shadow-md hover:scale-105 transition transform duration-200"
                        style={{
                            backgroundColor:
                                goal === "Improve Eyesight"
                                    ? "#3B82F6"
                                    : goal === "Improve Height"
                                        ? "#10B981"
                                        : goal === "Weight Loss"
                                            ? "#EF4444"
                                            : "#F59E0B",
                        }}
                    >
                        {goal}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default GoalSelection;