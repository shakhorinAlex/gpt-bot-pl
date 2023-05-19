import React, { useState } from "react";

function PricingComponent() {
  const [period, setPeriod] = useState("month");

  const pricing = {
    month: "$10",
    "2-month": "$18",
    "3-month": "$25",
  };

  return (
    <section className="section">
      <div className="flex flex-col md:flex-row justify-center p-6 ">
        <div className="flex flex-col bg-white  rounded p-4 m-2 w-1/3 bg-gray-100">
          <h2 className="text-lg font-semibold mb-2">Free</h2>
          <button className="mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <div className="flex flex-col bg-white border-4 border-blue-500 rounded p-4 m-2 w-1/3">
          <h2 className="text-lg font-semibold mb-2">Premium</h2>
          <p className="text-xl font-bold mb-4">{pricing[period]}</p>
          <ul className="list-disc list-inside">
            <li>Unlimited prompts</li>
            <li>Unlimited completions</li>
            <li>Unlimited characters</li>
            <li>Unlimited exports</li>
            <li>Unlimited users</li>
            <li>Unlimited workspaces</li>
          </ul>
          <div className="mb-4">
            <label className="block">
              <span className="text-gray-700">Choose period</span>
              <select
                className="form-select mt-1 block w-full bg-white border border-gray-200 rounded p-2"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              >
                <option value="month">1 Month</option>
                <option value="2-month">2 Months</option>
                <option value="3-month">3 Months</option>
              </select>
            </label>
          </div>
          <button className="mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default PricingComponent;
