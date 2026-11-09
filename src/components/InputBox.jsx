function InputBox({
    label,
    amount,
    currency= "usd",
    currencyOptions = [],
    onAmountChange,
    onCurrencyChange,
    isDisabled = false
}
)
{
    return (
        <>
        <div className="w-full p-5 flex justify-between bg-blue-100">
            <div className="w-1/2 flex flex-col">
            <label htmlFor="">{label}</label>
            <input
            type="text"
            value={amount}
            disabled={isDisabled}
            onChange={(e)=> onAmountChange && onAmountChange(e.target.value)}
            className="border-none outline-none p-2"
            />
            </div>
            <div className="w-1/2 flex flex-col">
                <label htmlFor="">Select Currency</label>
                <select
                    value={currency} 
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    className="outline-none cursor-pointer w-1/2 border-2 rounded"
                >
                    {
                        currencyOptions.map((option)=>(
                            <option key={option} value={option} 
                            className="bg-black text-white">
                                {option}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
        </>
        
    );
}

export default InputBox;