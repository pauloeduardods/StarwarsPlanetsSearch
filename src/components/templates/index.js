import tw from 'tailwind-styled-components';

export const ThTemplate = tw.th`
  px-6
  py-3
  text-left
  text-xs
  font-medium
  text-white
  uppercase
  tracking-wider
`;

export const TdTemplate = tw.td`
  px-6
  py-4
  whitespace-nowrap
  overflow-x-auto
  max-w-table
  overflow-y-hidden
`;

export const LabelTemplate = tw.label`
  block
  ml-2
`;

export const SpanTemplate = tw.span`
  block
  ml-2
`;

export const InputTemplate = tw.input`
  mt-1
  focus:ring-indigo-500
  focus:border-indigo-500
  block
  w-full
  sm:text-sm
  border
  border-gray-200
  rounded-md
  shadow-sm
  text-lg
  p-1
  sm:p-2
`;

export const SelectTemplate = tw.select`
  mt-1
  focus:ring-indigo-500
  focus:border-indigo-500
  block
  w-full
  sm:text-sm
  border
  border-gray-200
  rounded-md
  shadow-sm
  text-lg
  py-1
  pl-1
  sm:py-2
  sm:pl-2
  pr-5
`;

export const ButtonTemplate = tw.button`
  col-span-12
  inline-flex
  justify-center
  py-2
  px-4
  border
  border-transparent
  shadow-sm
  text-sm
  font-medium
  rounded-md
  text-white
  bg-indigo-600
  hover:bg-indigo-700
  focus:outline-none
  focus:ring-2
  focus:ring-offset-2
  focus:ring-indigo-500
  disabled:opacity-50
`;

export const FormTemplate = tw.form`
  border-t
  border-gray-200
  w-full
  py-4
  grid
  grid-cols-12
  gap-6
`;
