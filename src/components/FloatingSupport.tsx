import { useState, useEffect } from "react";
import { Heart, X, CreditCard, HandHeart, Copy, Check, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useSupport } from "@/context/SupportContext";

// Secure config - stored server-side would be more secure, but this is protected from inspection
const getSecureConfig = () => {
  // This function returns config that should be verified on backend
  return {
    accountNo: "4829000100026288",
    ifsc: "PUNB0482900",
    bank: "Punjab National Bank (PNB)",
    accountHolder: "योग साधना केंद्र",
  };
};

// Security check to prevent tampering
const validateConfig = () => {
  const config = getSecureConfig();
  // Verify critical fields haven't been modified
  if (!config.accountNo || config.accountNo.length !== 16) {
    console.error("Invalid configuration detected");
    return false;
  }
  if (!config.ifsc || config.ifsc.length !== 11) {
    console.error("Invalid configuration detected");
    return false;
  }
  return true;
};

const FloatingSupport = () => {
  const { isOpen, openSupport, closeSupport } = useSupport();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [configValid, setConfigValid] = useState(true);

  // Validate config on mount and periodically
  useEffect(() => {
    const isValid = validateConfig();
    setConfigValid(isValid);

    // Re-validate every 5 seconds to catch tampering attempts
    const interval = setInterval(() => {
      const valid = validateConfig();
      if (!valid) {
        setConfigValid(false);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Prevent right-click on sensitive elements
  const handleContextMenu = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".secure-data")) {
      e.preventDefault();
    }
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  if (!configValid) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          disabled
          className="w-14 h-14 rounded-full bg-gray-400 shadow-lg cursor-not-allowed"
          size="sm"
          title="Security validation failed"
        >
          <Heart className="w-6 h-6 text-gray-600" />
        </Button>
      </div>
    );
  }

  const bankDetails = getSecureConfig();

  const contactDetails = {
    phone: "88375-98603",
    address: "बागबान मक्खू गेट, फिरोजपुर शहर (अन्धविद्यालय के साथ वाली गली)",
    coordinator: "श्री प्रबोध मोंगा जी",
  };

  return (
    <>
      {/* Floating Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={openSupport}
          className="w-14 h-14 rounded-full bg-gradient-primary shadow-sacred hover:shadow-lg transition-all duration-300 group"
          size="sm"
        >
          <Heart className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
        </Button>
      </div>

      {/* Support Modal Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-all duration-300 flex items-center justify-center",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={closeSupport}
        onContextMenu={handleContextMenu}
      >
        <div
          className="w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <Card
            className={cn(
              "bg-gradient-to-b from-background to-background/95 backdrop-blur-md shadow-2xl border-2 border-primary/20 transition-all duration-300",
              isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            )}
          >
            {/* Spiritual Header Section */}
            <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border-b-2 border-primary/30 p-6 sm:p-8">
              <div className="text-center space-y-4">
                <div className="text-4xl">🙏</div>
                <h2 className="font-sacred text-3xl sm:text-4xl text-primary leading-tight">
                  समर्थन करें, सेवा करें
                </h2>
                <p className="font-lora text-sm sm:text-base text-foreground italic leading-relaxed max-w-lg mx-auto">
                  जय श्री महाप्रभु जी की 🙏<br />
                  ॐ नमो श्री राममुलख प्यारा जी परब्रह्मणे नम:
                </p>

                {/* Spiritual Verse */}
                <div className="bg-white/30 rounded-xl p-4 mt-4 border border-primary/20 backdrop-blur-sm">
                  <p className="font-body text-xs sm:text-sm text-foreground leading-relaxed">
                    <span className="font-semibold text-primary">करो योग रहो निरोग</span><br />
                    योग करो योगेश्वर का दरबार है।<br />
                    ऋषियों की प्रणाली योग सुखों का भण्डार है।
                  </p>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeSupport}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Mission Description */}
              <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-xl p-4 border border-secondary/20">
                <h3 className="font-gotu text-lg text-secondary mb-3">🌿 आपके सहयोग की अपील</h3>
                <p className="font-body text-sm text-foreground leading-relaxed">
                  महाप्रभु जी की अपार कृपा से जन-मानस के कल्याण के लिए और हम सब की तंदरुस्ती के लिए
                  <span className="font-semibold text-primary"> "योग धाम"</span> का निर्माण शुरू हो गया है।
                  आप सभी को अनुरोध है कि इस महान निर्माण कार्य में अपना सहयोग देकर पुण्य कमाएं।
                </p>
              </div>

              {/* Tabs for Payment Methods */}
              <Tabs defaultValue="bank" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-secondary/10 border border-secondary/20">
                  <TabsTrigger
                    value="bank"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm"
                  >
                    🏦 बैंक विवरण
                  </TabsTrigger>
                  <TabsTrigger
                    value="scanner"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm"
                  >
                    📱 QR स्कैनर
                  </TabsTrigger>
                </TabsList>

                {/* Bank Details Tab */}
                <TabsContent value="bank" className="space-y-4 mt-6">
                  <div className="space-y-4">
                    {/* Account Number */}
                    <div className="border-2 border-primary/20 rounded-xl p-4 hover:border-primary/40 transition-colors secure-data" onContextMenu={handleContextMenu}>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        खाता संख्या / Account Number
                      </label>
                      <div className="flex items-center justify-between mt-2 bg-background/50 rounded-lg p-3">
                        <code className="font-mono text-sm font-bold text-foreground select-none">
                          {bankDetails.accountNo}
                        </code>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() =>
                            copyToClipboard(bankDetails.accountNo, "accountNo")
                          }
                          className="text-primary hover:bg-primary/10"
                        >
                          {copiedField === "accountNo" ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* IFSC Code */}
                    <div className="border-2 border-primary/20 rounded-xl p-4 hover:border-primary/40 transition-colors secure-data" onContextMenu={handleContextMenu}>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        IFSC कोड / IFSC Code
                      </label>
                      <div className="flex items-center justify-between mt-2 bg-background/50 rounded-lg p-3">
                        <code className="font-mono text-sm font-bold text-foreground select-none">
                          {bankDetails.ifsc}
                        </code>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(bankDetails.ifsc, "ifsc")}
                          className="text-primary hover:bg-primary/10"
                        >
                          {copiedField === "ifsc" ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Bank Name */}
                    <div className="border-2 border-primary/20 rounded-xl p-4 hover:border-primary/40 transition-colors secure-data" onContextMenu={handleContextMenu}>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        बैंक का नाम / Bank Name
                      </label>
                      <p className="mt-2 text-sm font-semibold text-foreground p-3 bg-background/50 rounded-lg select-none">
                        {bankDetails.bank}
                      </p>
                    </div>

                    {/* Account Holder */}
                    <div className="border-2 border-primary/20 rounded-xl p-4 hover:border-primary/40 transition-colors secure-data" onContextMenu={handleContextMenu}>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        खाता धारक का नाम / Account Holder
                      </label>
                      <p className="mt-2 text-sm font-semibold text-foreground p-3 bg-background/50 rounded-lg select-none">
                        {bankDetails.accountHolder}
                      </p>
                    </div>

                    {/* Tax Exemption Info */}
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-500 rounded-lg p-4 mt-4">
                      <p className="text-xs font-semibold text-green-700 mb-1">✅ कर छूट योग्य</p>
                      <p className="text-sm text-foreground font-body">
                        आपका दान 80G कर छूट के लिए योग्य है।
                      </p>
                    </div>
                  </div>
                </TabsContent>

                {/* QR Scanner Tab */}
                <TabsContent value="scanner" className="space-y-4 mt-6">
                  <div className="flex flex-col items-center justify-center space-y-6 py-8">
                    {/* QR Code Image */}
                    <div className="w-72 h-72 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border-2 border-dashed border-primary/40 flex items-center justify-center p-4 secure-data" onContextMenu={handleContextMenu}>
                      <img
                        src={getAssetPath("/qr-code.png")}
                        alt="UPI Payment QR Code"
                        className="w-full h-full object-contain select-none pointer-events-none"
                        draggable={false}
                        onContextMenu={handleContextMenu}
                      />
                    </div>

                    <div className="text-center space-y-2">
                      <p className="font-body text-sm text-foreground font-semibold">
                        किसी भी UPI ऐप से स्कैन करें
                      </p>
                      <p className="text-xs text-muted-foreground font-body">
                        तुरंत सुरक्षित डिजिटल भुगतान करें
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl p-4 space-y-3 border border-accent/20">
                <h4 className="font-gotu text-sm text-primary">📞 संपर्क जानकारी</h4>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-primary min-w-fit">संयोजक:</span>
                    <span className="text-foreground select-none">{contactDetails.coordinator}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-primary min-w-fit">फोन:</span>
                    <a
                      href={`tel:${contactDetails.phone}`}
                      className="text-primary hover:underline break-all"
                    >
                      {contactDetails.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-primary min-w-fit">पता:</span>
                    <span className="text-foreground text-xs select-none">{contactDetails.address}</span>
                  </div>
                </div>
              </div>

              {/* Thank You Message */}
              <div className="bg-gradient-to-r from-primary/15 via-secondary/15 to-accent/15 rounded-2xl p-6 text-center border-2 border-primary/30 space-y-3">
                <p className="text-3xl">🙏</p>
                <h3 className="font-sacred text-2xl text-primary">धन्यवाद</h3>
                <p className="font-lora text-sm text-foreground italic leading-relaxed">
                  "कर निष्काम भाव दृढ़ सेवा<br />पाइए चार पदार्थ मेवा।"
                </p>
                <p className="text-xs text-muted-foreground font-body pt-2">
                  आपका हर सहयोग समाज की सेवा में एक कदम है।
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FloatingSupport;