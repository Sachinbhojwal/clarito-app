import useAuth from "../../../hooks/useAuth";

const ProviderHeader = () => {
  const { user } = useAuth();

  return (
    <section
      className="
      rounded-3xl
      bg-gradient-to-r
      from-green-500
      to-emerald-600
      p-8
      text-white
      "
    >
      <div
        className="
        flex
        flex-col
        gap-6
        md:flex-row
        md:items-center
        md:justify-between
        "
      >
        <div>
          <h1
            className="
            text-3xl
            font-bold
            "
          >
            Welcome,
            {" "}
            {user?.name}
            👋
          </h1>

          <p
            className="
            mt-3
            text-green-100
            "
          >
            Service :
            {" "}
            <span className="font-semibold">
              {user?.service}
            </span>
          </p>

          <p className="text-green-100">
            Email :
            {" "}
            {user?.email}
          </p>
        </div>

        <div
          className="
          flex
          h-28
          w-28
          items-center
          justify-center
          rounded-full
          bg-white
          text-4xl
          font-bold
          text-green-600
          shadow-lg
          "
        >
          {user?.name
            ?.charAt(0)
            .toUpperCase()}
        </div>
      </div>
    </section>
  );
};

export default ProviderHeader;