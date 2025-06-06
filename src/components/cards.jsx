import PropTypes from 'prop-types';
import { useState } from 'react';

const Cards = ({ Images_data }) => {
  const [liked, setLiked] = useState([]);

  const toggleLike = (index) => {
    setLiked((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6 font-poppins font-medium border-b border-[#212121B2] ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Images_data.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.title}
              className="w-[288px] h-auto rounded-lg shadow-md object-cover md:w-fit"
            />
            <div className="flex justify-between p-2 rounded-b-lg">
              <h3 className="text-base font-semibold">{image.title}</h3>
              <svg
                onClick={() => toggleLike(index)}
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9512 1.05664C17.3161 0.856584 18.8067 1.15981 20.1602 2.32812L20.4287 2.57324C22.6597 4.72264 22.3285 8.02556 20.5967 9.89355L20.4248 10.0693L11.5 18.6025L2.57422 10.0693H2.5752C0.754421 8.29659 0.296669 5.00618 2.36328 2.78516L2.57129 2.57324C3.99417 1.20243 5.593 0.843258 7.04883 1.05664C8.5402 1.27524 9.89546 2.09997 10.7266 3.11523L11.5 4.06055L12.2734 3.11523C13.1045 2.09997 14.4598 1.27524 15.9512 1.05664Z"
                  stroke={liked.includes(index) ? '#ef4444' : '#212121'}
                  strokeWidth="2"
                  fill={liked.includes(index) ? '#ef4444' : 'none'}
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  Images_data: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cards;
