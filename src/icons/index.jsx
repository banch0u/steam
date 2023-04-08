const DownloadIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.29289 5.70711L7.29289 10.7071L8 11.4142L8.70711 10.7071L13.7071 5.70711L12.2929 4.29289L9 7.58579V0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2C0 0.895431 0.895431 0 2 0H7L7 7.58579L3.70711 4.29289L2.29289 5.70711Z"
        fill="#fff"
      />
    </svg>
  );
};
const SearchIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="4.5 4.5 16 16">
      <circle cx="11" cy="11" r="6" stroke="#222222" />
      <path d="M20 20L17 17" stroke="#222222" stroke-linecap="round" />
    </svg>
  );
};
export { DownloadIcon, SearchIcon };
