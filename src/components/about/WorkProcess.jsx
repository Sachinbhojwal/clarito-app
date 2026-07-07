import { team } from "../../data/team";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const TeamSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block bg-amber-100 text-amber-600 px-5 py-2 rounded-full font-semibold">
            OUR TEAM
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Meet The Amazing Team
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Behind every successful service is a passionate team working
            hard to provide the best experience for our customers.
          </p>

        </div>

        {/* Team Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {team.map((member) => (

            <div
              key={member.id}
              className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full
                    h-80
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-900">
                  {member.name}
                </h3>

                <p className="mt-2 text-amber-600 font-semibold">
                  {member.role}
                </p>

                <span className="inline-block mt-3 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-600">
                  {member.experience}
                </span>

                <p className="mt-5 text-gray-600 leading-7 text-sm">
                  {member.bio}
                </p>

                {/* Contact */}

                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-3 text-gray-600 text-sm">

                    <FaEnvelope className="text-amber-500" />

                    <span>{member.email}</span>

                  </div>

                  <div className="flex items-center gap-3 text-gray-600 text-sm">

                    <FaPhoneAlt className="text-amber-500" />

                    <span>{member.phone}</span>

                  </div>

                </div>

                {/* Social */}

                <div className="flex gap-4 mt-6">

                  <a
                    href={member.social.linkedin}
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-gray-100
                      flex
                      items-center
                      justify-center
                      hover:bg-blue-600
                      hover:text-white
                      transition
                    "
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href={member.social.twitter}
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-gray-100
                      flex
                      items-center
                      justify-center
                      hover:bg-sky-500
                      hover:text-white
                      transition
                    "
                  >
                    <FaTwitter />
                  </a>

                  <a
                    href={member.social.instagram}
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-gray-100
                      flex
                      items-center
                      justify-center
                      hover:bg-pink-500
                      hover:text-white
                      transition
                    "
                  >
                    <FaInstagram />
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default TeamSection;