
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDarkMode } from '@/hooks/useDarkMode';

export const DarkModeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-20 right-4 z-50"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
};
