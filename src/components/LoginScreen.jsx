import React, { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Loader2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/i18n';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function LoginScreen() {
  const { loginWithPhone } = useAuth();
  const { t } = useTranslation();
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Simple validation
    const trimmedPhone = phone.trim();
    if (!trimmedPhone) {
      setError(t("auth.errorEmpty"));
      return;
    }

    // Phone number regex check (starts with optional +, then contains at least 8 digits)
    const phoneRegex = /^\+?[1-9]\d{7,14}$/;
    const sanitized = trimmedPhone.replace(/[\s.-]/g, ''); // Remove spaces, dots, dashes

    if (!phoneRegex.test(sanitized)) {
      setError(t("auth.errorInvalid"));
      return;
    }

    try {
      setIsLoading(true);
      await loginWithPhone(sanitized);
    } catch (err) {
      console.error(err);
      setError(t("auth.errorGeneric"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 px-4 py-12 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glowing decorations */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md z-10"
      >
        <div className="flex justify-end mb-3">
          <LanguageSwitcher className="text-slate-300 hover:text-white" />
        </div>
        <Card className="border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-2xl text-slate-100 overflow-hidden">
          <CardHeader className="text-center pb-6 pt-8">
            <div className="mx-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-4 border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              {t("auth.welcome")}
            </div>
            <CardTitle className="font-heading text-4xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Biblia-Quiz
            </CardTitle>
            <CardDescription className="text-slate-400 mt-2 text-sm sm:text-base">
              {t("auth.tagline")}
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4 pt-2 pb-6 px-6 sm:px-8">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-300 text-sm font-medium">
                  {t("auth.phoneLabel")}
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t("auth.phonePlaceholder")}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={isLoading}
                    className="pl-10 py-6 bg-slate-800/40 border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-amber-500 rounded-xl"
                  />
                </div>
                <p className="text-xxs text-slate-500 leading-normal">
                  {t("auth.phoneHelp")}
                </p>
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center">
                  {error}
                </div>
              )}
            </CardContent>

            <CardFooter className="pb-8 pt-2 px-6 sm:px-8">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-6 rounded-xl transition-all shadow-lg shadow-orange-500/10 border-0 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t("auth.loggingIn")}
                  </>
                ) : (
                  <>
                    {t("auth.login")}
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}
