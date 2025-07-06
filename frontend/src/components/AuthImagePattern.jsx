const AuthImagePattern = ({ title, subtitle }) => {
    return (
      <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
        <div className="max-w-md text-center">
          <div className="mb-8">
          <img
            src="https://files.ably.io/ghost/prod/2023/01/build-a-realtime-chat-app-from-scratch--1-.png" // change to your image path
            alt="Auth Illustration"
            className="w-84 h-96 object-cover rounded-2xl mx-auto"
          />
        </div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-base-content/60">{subtitle}</p>
        </div>
      </div>

    );
  };
  
  export default AuthImagePattern;