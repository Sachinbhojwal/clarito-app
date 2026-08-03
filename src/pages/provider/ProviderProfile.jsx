import { useState } from "react";

import ProfileHeader from "../../components/provider/profile/ProfileHeader";
import ProfileAvatar from "../../components/provider/profile/ProfileAvatar";
import PersonalInfo from "../../components/provider/profile/PersonalInfo";
import ProfessionalInfo from "../../components/provider/profile/ProfessionalInfo";
import AddressInfo from "../../components/provider/profile/AddressInfo";
import Documents from "../../components/provider/profile/Documents";
import BankDetails from "../../components/provider/profile/BankDetails";
import SocialLinks from "../../components/provider/profile/SocialLinks";
import ProfileCompletion from "../../components/provider/profile/ProfileCompletion";
import SaveProfile from "../../components/provider/profile/SaveProfile";

import { providerProfile } from "../../data/provider/providerProfile";

const ProviderProfile = () => {
  const [profile, setProfile] =
    useState(providerProfile);

  const [loading, setLoading] =
    useState(false);

  const handleSave = () => {
    setLoading(true);

    setTimeout(() => {
      localStorage.setItem(
        "providerProfile",
        JSON.stringify(profile)
      );

      alert(
        "Profile updated successfully."
      );

      setLoading(false);
    }, 1000);
  };

  return (
    <section
      className="
      space-y-8
      "
    >
      {/* Header */}

      <ProfileHeader />

      {/* Profile Avatar */}

      <ProfileAvatar
        name={profile.name}
        profileImage={
          profile.profileImage
        }
        setProfileImage={(image) =>
          setProfile((prev) => ({
            ...prev,
            profileImage: image,
          }))
        }
      />

      {/* Personal Information */}

      <PersonalInfo
        profile={profile}
        setProfile={setProfile}
      />

      {/* Professional Information */}

      <ProfessionalInfo
        profile={profile}
        setProfile={setProfile}
      />

      {/* Address */}

      <AddressInfo
        profile={profile}
        setProfile={setProfile}
      />

      {/* Documents */}

      <Documents
        profile={profile}
        setProfile={setProfile}
      />

      {/* Bank Details */}

      <BankDetails
        profile={profile}
        setProfile={setProfile}
      />

      {/* Social Links */}

      <SocialLinks
        profile={profile}
        setProfile={setProfile}
      />

      {/* Profile Completion */}

      <ProfileCompletion
        profile={profile}
      />

      {/* Save Button */}

      <SaveProfile
        onSave={handleSave}
        loading={loading}
      />
    </section>
  );
};

export default ProviderProfile;