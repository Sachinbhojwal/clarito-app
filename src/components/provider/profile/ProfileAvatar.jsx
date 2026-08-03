import { FaCamera } from "react-icons/fa";

const ProfileAvatar = ({
  profileImage,
  setProfileImage,
  name,
}) => {
  const handleImageChange = (
    event
  ) => {
    const file =
      event.target.files[0];

    if (!file) {
      return;
    }

    const imageUrl =
      URL.createObjectURL(file);

    setProfileImage(imageUrl);
  };

  return (
    <section
      className="
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-8
      shadow-sm
      "
    >
      <div
        className="
        flex
        flex-col
        items-center
        gap-5
        md:flex-row
        "
      >
        {/* Avatar */}

        <div className="relative">
          <img
            src={
              profileImage ||
              "https://ui-avatars.com/api/?name=" +
              encodeURIComponent(
                name
              ) +
              "&background=f59e0b&color=ffffff&size=200"
            }
            alt={name}
            className="
            h-36
            w-36
            rounded-full
            border-4
            border-amber-500
            object-cover
            "
          />

          <label
            className="
            absolute
            bottom-2
            right-2
            flex
            h-10
            w-10
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-amber-500
            text-white
            shadow-lg
            hover:bg-amber-600
            "
          >
            <FaCamera />

            <input
              type="file"
              accept="image/*"
              onChange={
                handleImageChange
              }
              className="hidden"
            />
          </label>
        </div>

        {/* Details */}

        <div>
          <h2
            className="
            text-2xl
            font-bold
            "
          >
            {name}
          </h2>

          <p
            className="
            mt-2
            text-gray-500
            "
          >
            Upload a professional
            profile picture to build
            trust with customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileAvatar;