import Button from '../Components/button';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen gap-3">
      <span className="text-3xl font-semibold flex items-center">
        404 Not Found <span className="mx-2">|</span>
      </span>
      <Button value="Return Home" to="/" />
    </div>
  );
};

export default NotFound;
