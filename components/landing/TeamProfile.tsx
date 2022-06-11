


interface TeamProfileProps{
    name : string;
    role : string;
    picture : string;
}

const TeamProfile = ({name, role, picture}:TeamProfileProps):JSX.Element => {
    return ( 
        <div className="w-1/2 md:w-4/12 lg:w-4/12 xl:w-1/6 xl:mb-0 mb-12 px-2">
        <div className="px-2">
          <img
            alt="..."
            src={picture}
            className="shadow-lg rounded-full max-w-full mx-auto"
            style={{ maxWidth: "120px", height: "110px" }}
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">
              {name}
            </h5>
            <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
              {role}
            </p>
          </div>
        </div>
      </div>
  )
}

export default TeamProfile;