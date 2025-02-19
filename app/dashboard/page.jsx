"use client";

import React from "react";


export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* Summary Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="flex justify-around">
            <div className="text-center">
              <p className="text-gray-500">You owe</p>
              <p className="text-red-500 text-2xl font-bold">$125.00</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500">You are owed</p>
              <p className="text-green-500 text-2xl font-bold">$200.00</p>
            </div>
          </div>
        </section>

        {/* Detailed Balance Breakdown */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Balances</h2>
          <ul>
            <li className="flex justify-between items-center mb-3">
              <p className="text-gray-700">
                You owe <span className="font-semibold">John</span>
              </p>
              <p className="text-red-500">-$50.00</p>
            </li>
            <li className="flex justify-between items-center mb-3">
              <p className="text-gray-700">
                You owe <span className="font-semibold">Anna</span>
              </p>
              <p className="text-red-500">-$75.00</p>
            </li>
            <li className="flex justify-between items-center mb-3">
              <p className="text-gray-700">
                <span className="font-semibold">Emma</span> owes you
              </p>
              <p className="text-green-500">+$100.00</p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-gray-700">
                <span className="font-semibold">Alex</span> owes you
              </p>
              <p className="text-green-500">+$50.00</p>
            </li>
          </ul>
        </section>

        {/* Recent Activity */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul>
            <li className="mb-3">
              <p className="text-gray-700">
                <span className="font-semibold">John</span> paid you $50.00
              </p>
              <span className="text-gray-500 text-sm">2 hours ago</span>
            </li>
            <li className="mb-3">
              <p className="text-gray-700">
                You paid <span className="font-semibold">Anna</span> $25.00
              </p>
              <span className="text-gray-500 text-sm">1 day ago</span>
            </li>
            <li className="mb-3">
              <p className="text-gray-700">
                You added an expense with{" "}
                <span className="font-semibold">Emma</span>: "Dinner"
              </p>
              <span className="text-gray-500 text-sm">3 days ago</span>
            </li>
            <li>
              <p className="text-gray-700">
                <span className="font-semibold">Alex</span> added an expense:
                "Movie Tickets"
              </p>
              <span className="text-gray-500 text-sm">1 week ago</span>
            </li>
          </ul>
        </section>

        {/* Upcoming Payments */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upcoming Payments</h2>
          <ul>
            <li className="flex justify-between items-center mb-3">
              <p className="text-gray-700">
                Rent (due to <span className="font-semibold">Anna</span>)
              </p>
              <p className="text-gray-500">$500.00</p>
            </li>
            <li className="flex justify-between items-center mb-3">
              <p className="text-gray-700">
                Electricity Bill (shared with{" "}
                <span className="font-semibold">John</span>)
              </p>
              <p className="text-gray-500">$75.00</p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-gray-700">Internet Bill (due next week)</p>
              <p className="text-gray-500">$50.00</p>
            </li>
          </ul>
        </section>

        {/* Actions */}
        <section className="flex gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add Expense
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400">
            Create Group
          </button>
        </section>
      </main>

      
    </div>
  );
}
