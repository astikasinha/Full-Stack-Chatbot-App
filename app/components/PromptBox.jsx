'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
const PromptBox = () => {
  const [prompt, setPrompt] = useState('');

  return (
    <div className='w-full'>
      <form
        className={`w-full ${false ? 'max-w-3xl' : 'max-w-2xl'} bg-[#404045] p-4
        rounded-3xl mt-4 transition-all`}
      >
        <textarea
          className='outline-none w-full resize-none overflow-hidden break-words bg-transparent text-white'
          rows={2}
          placeholder='Message AI App'
          required
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
        />
      </form>

      <div className='flex items-center justify-between text-sm mt-2'>
        <div className='flex items-center gap-2'>
          <p className='flex items-center gap-2 text-xs border border-gray-300/40 px-2 rounded-full cursor-pointer hover:bg-gray-500/20 transition'>
            <Image src={assets.deepthink_icon} alt='DeepThink' width={20} height={20} />
            DeepThink(R1)
          </p>
          <p className='flex items-center gap-2 text-xs border border-gray-300/40 px-2 rounded-full cursor-pointer hover:bg-gray-500/20 transition'>
            <Image src={assets.search_icon} alt='Search' width={20} height={20} />
            Search
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <Image src={assets.pin_icon} alt='Pin' width={16} height={16} className='cursor-pointer' />
          <button
            className={`${prompt ? 'bg-primary' : 'bg-[#71717a]'} rounded-full p-2 cursor-pointer`}
          >
            <Image
              src={prompt ? assets.arrow_icon : assets.arrow_icon_dull}
              alt='Send'
              width={14}
              height={14}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptBox;
