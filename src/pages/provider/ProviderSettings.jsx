import { useState } from "react";

import SettingsHeader from "../../components/provider/settings/SettingsHeader";
import ChangePassword from "../../components/provider/settings/ChangePassword";
import NotificationSettings from "../../components/provider/settings/NotificationSettings";
import PrivacySettings from "../../components/provider/settings/PrivacySettings";
import AccountSettings from "../../components/provider/settings/AccountSettings";
import DeleteAccount from "../../components/provider/settings/DeleteAccount";
import SaveSettings from "../../components/provider/settings/SaveSettings";

import { providerSettings } from "../../data/provider/providerSettings";

const ProviderSettings = () => {
  const [settings, setSettings] =
    useState(providerSettings);

  const [loading, setLoading] =
    useState(false);

  const handleSave = () => {
    setLoading(true);

    setTimeout(() => {
      localStorage.setItem(
        "providerSettings",
        JSON.stringify(settings)
      );

      alert(
        "Settings updated successfully."
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

      <SettingsHeader />

      {/* Password */}

      <ChangePassword />

      {/* Notifications */}

      <NotificationSettings
        settings={settings}
        setSettings={setSettings}
      />

      {/* Privacy */}

      <PrivacySettings
        settings={settings}
        setSettings={setSettings}
      />

      {/* Account */}

      <AccountSettings
        settings={settings}
        setSettings={setSettings}
      />

      {/* Delete Account */}

      <DeleteAccount />

      {/* Save */}

      <SaveSettings
        onSave={handleSave}
        loading={loading}
      />
    </section>
  );
};

export default ProviderSettings;