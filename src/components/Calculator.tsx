'use client';
import { useState } from 'react';

export default function Calculator() {
    const [display, setDisplay] = useState('0');
    const [equation, setEquation] = useState('');

    const handleNumber = (number: string) => {
        setDisplay(display === '0' ? number : display + number);
    };

    const handleOperator = (operator: string) => {
        setEquation(display + ' ' + operator + ' ');
        setDisplay('0');
    };

    const calculate = () => {
        try {
            const result = eval(equation + display);
            setDisplay(result.toString());
            setEquation('');
        } catch (error) {
            setDisplay('Error');
        }
    };

    const clear = () => {
        setDisplay('0');
        setEquation('');
    };

    return (
        <div className="backdrop-blur-lg bg-white/10 p-6 rounded-3xl shadow-2xl w-[320px] border border-white/20">
            <div className="mb-4">
                <div className="text-gray-400 text-right h-6 text-sm">{equation}</div>
                <div className="text-white text-right text-4xl font-light h-12 overflow-hidden">{display}</div>
            </div>

            <div className="grid grid-cols-4 gap-3">
                <button onClick={clear} className="col-span-2 bg-red-500/20 hover:bg-red-500/30 text-white p-4 rounded-2xl transition-all">AC</button>
                <button onClick={() => handleOperator('/')} className="bg-purple-500/20 hover:bg-purple-500/30 text-white p-4 rounded-2xl transition-all">÷</button>
                <button onClick={() => handleOperator('*')} className="bg-purple-500/20 hover:bg-purple-500/30 text-white p-4 rounded-2xl transition-all">×</button>

                {[7, 8, 9].map((num) => (
                    <button key={num} onClick={() => handleNumber(num.toString())} className="bg-white/10 hover:bg-white/20 text-white p-4 rounded-2xl transition-all">
                        {num}
                    </button>
                ))}
                <button onClick={() => handleOperator('-')} className="bg-purple-500/20 hover:bg-purple-500/30 text-white p-4 rounded-2xl transition-all">-</button>

                {[4, 5, 6].map((num) => (
                    <button key={num} onClick={() => handleNumber(num.toString())} className="bg-white/10 hover:bg-white/20 text-white p-4 rounded-2xl transition-all">
                        {num}
                    </button>
                ))}
                <button onClick={() => handleOperator('+')} className="bg-purple-500/20 hover:bg-purple-500/30 text-white p-4 rounded-2xl transition-all">+</button>

                {[1, 2, 3].map((num) => (
                    <button key={num} onClick={() => handleNumber(num.toString())} className="bg-white/10 hover:bg-white/20 text-white p-4 rounded-2xl transition-all">
                        {num}
                    </button>
                ))}
                <button onClick={calculate} className="bg-purple-500/40 hover:bg-purple-500/50 text-white p-4 rounded-2xl transition-all row-span-2">=</button>

                <button onClick={() => handleNumber('0')} className="col-span-2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-2xl transition-all">0</button>
                <button onClick={() => handleNumber('.')} className="bg-white/10 hover:bg-white/20 text-white p-4 rounded-2xl transition-all">.</button>
            </div>
        </div>
    );
} 