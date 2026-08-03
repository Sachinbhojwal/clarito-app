const SocialLinks = ({
  profile,
  setProfile,
}) => {
  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      <h2
        className="
        mb-8
        text-2xl
        font-bold
        "
      >
        Social Links
      </h2>

      <div
        className="
        grid
        gap-6
        md:grid-cols-2
        "
      >
        {/* Website */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Website
          </label>

          <input
            type="url"
            name="website"
            value={
              profile.website || ""
            }
            onChange={handleChange}
            placeholder="https://example.com"
            className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            outline-none
            focus:border-amber-500
            "
          />
        </div>

        {/* Facebook */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Facebook
          </label>

          <input
            type="url"
            name="facebook"
            value={
              profile.facebook
            }
            onChange={handleChange}
            placeholder="Facebook profile link"
            className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            outline-none
            focus:border-amber-500
            "
          />
        </div>

        {/* Instagram */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Instagram
          </label>

          <input
            type="url"
            name="instagram"
            value={
              profile.instagram
            }
            onChange={handleChange}
            placeholder="Instagram profile link"
            className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            outline-none
            focus:border-amber-500
            "
          />
        </div>

        {/* LinkedIn */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            LinkedIn
          </label>

          <input
            type="url"
            name="linkedin"
            value={
              profile.linkedin
            }
            onChange={handleChange}
            placeholder="LinkedIn profile link"
            className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            outline-none
            focus:border-amber-500
            "
          />
        </div>

        {/* YouTube */}

        <div className="md:col-span-2">
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            YouTube
          </label>

          <input
            type="url"
            name="youtube"
            value={
              profile.youtube || ""
            }
            onChange={handleChange}
            placeholder="YouTube channel link"
            className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            outline-none
            focus:border-amber-500
            "
          />
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;