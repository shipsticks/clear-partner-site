import React, { useState } from 'react';
import classNames from 'classnames';
import { useSubmitLead } from '@/hooks/useSubmitLead';

const EmailInputComponent = ({ id, className, buttonBgColor = '#49C44F' }) => {
  const [email, setEmail] = useState('');

  const { submitEmail, loading, error } = useSubmitLead();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await submitEmail(email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames(
        "flex flex-col lg:h-[75px] sm:flex-row items-center sm:items-center p-2 sm:bg-white sm:shadow-lg sm:rounded-full",
        className
      )}
    >
      <div className="flex-1 text-left mb-2 sm:mb-0 bg-white w-full rounded-full">
        <label htmlFor={id} className="hidden sm:block text-base font-medium text-[#1C2938] pl-6">Email Address</label>
        <input
          id={id}
          type="email"
          placeholder="emailaddress@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-14 sm:h-auto pl-8 sm:pl-6 text-base font-normal text-[#1C2938] text-opacity-60 bg-transparent focus:outline-none rounded-full"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto h-[59px] px-11 py-3 text-white font-medium text-lg rounded-full sm:ml-4"
        style={{ backgroundColor: buttonBgColor }}
      >
        Submit
      </button>
    </form>
  );
};

export default EmailInputComponent;
