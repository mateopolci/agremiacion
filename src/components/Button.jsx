export const Button = ({text}) => {
    return (
      <button className="bg-teal-300 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
        {text}
      </button>
    );
};