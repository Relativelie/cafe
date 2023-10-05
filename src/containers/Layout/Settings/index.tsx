import LanguageSettings from './LanguageSettings';
import ThemeSettings from './ThemeSettings';

const Settings = () => {
  return (
    <div className="flex flex-col gap-4">
      <ThemeSettings />
      <LanguageSettings />
    </div>
  );
};

export default Settings;
