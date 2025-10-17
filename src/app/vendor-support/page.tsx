"use client";
import { useState } from 'react';
import Link from 'next/link';
import Toast from '@/components/Toast';
import { uploadToCloudinary, validateFile } from '@/lib/cloudinary';

export default function VendorSupportPage() {
  const [activeForm, setActiveForm] = useState<'small-business' | 'vendor-initiative'>('small-business');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info'; isVisible: boolean }>({
    message: '',
    type: 'success',
    isVisible: false
  });

  const [smallBusinessForm, setSmallBusinessForm] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    city: '',
    businessDescription: '',
    objectives: '',
    businessLicense: null as File | null,
    businessLicenseUrl: '' as string
  });

  const [vendorForm, setVendorForm] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    city: '',
    businessDescription: '',
    objectives: '',
    businessLicense: null as File | null,
    businessLicenseUrl: '' as string
  });

  // Helper function to show toast
  const showToast = (message: string, type: 'success' | 'error' | 'info') => {
    setToast({ message, type, isVisible: true });
  };

  // Helper function to handle file upload
  const handleFileUpload = async (file: File, folder: string): Promise<string | null> => {
    try {
      // Validate file
      const validation = validateFile(file);
      if (!validation.isValid) {
        showToast(validation.error || 'Invalid file', 'error');
        return null;
      }

      // Upload to Cloudinary
      const result = await uploadToCloudinary(file, folder);
      showToast('File uploaded successfully!', 'success');
      return result.secure_url;
    } catch (error) {
      console.error('File upload error:', error);
      showToast('Failed to upload file. Please try again.', 'error');
      return null;
    }
  };

  const handleSmallBusinessSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Upload file if provided
      let businessLicenseUrl = '';
      if (smallBusinessForm.businessLicense) {
        businessLicenseUrl = await handleFileUpload(smallBusinessForm.businessLicense, 'fwc26-small-business') || '';
      }

      const formData = {
        ...smallBusinessForm,
        businessLicenseUrl
      };

      const response = await fetch('/api/register-small-business', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        const successMessage = data.message || 'Thank you for registering for the FWC26 Small Business Initiative Program! Check your email for next steps and consultation booking link.';
        setSubmitMessage({ 
          type: 'success', 
          text: successMessage
        });
        showToast('Registration successful! Check your email for next steps.', 'success');
        
        // Reset form
        setSmallBusinessForm({
          name: '',
          email: '',
          phone: '',
          businessName: '',
          businessType: '',
          city: '',
          businessDescription: '',
          objectives: '',
          businessLicense: null,
          businessLicenseUrl: ''
        });
      } else {
        const errorMessage = data.error || 'There was an error submitting your registration. Please try again.';
        setSubmitMessage({ 
          type: 'error', 
          text: errorMessage
        });
        showToast(errorMessage, 'error');
      }
    } catch (error) {
      console.error('Registration error:', error);
      const errorMessage = 'Network error. Please check your connection and try again.';
      setSubmitMessage({ 
        type: 'error', 
        text: errorMessage
      });
      showToast(errorMessage, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVendorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Upload file if provided
      let businessLicenseUrl = '';
      if (vendorForm.businessLicense) {
        businessLicenseUrl = await handleFileUpload(vendorForm.businessLicense, 'fwc26-vendor-initiative') || '';
      }

      const formData = {
        ...vendorForm,
        businessLicenseUrl
      };

      const response = await fetch('/api/register-vendor-initiative', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        const successMessage = data.message || 'Thank you for pre-registering for the FWC26 Canadian Vendor Initiative Program! Check your email for next steps and consultation booking link.';
        setSubmitMessage({ 
          type: 'success', 
          text: successMessage
        });
        showToast('Pre-registration successful! Check your email for next steps.', 'success');
        
        // Reset form
        setVendorForm({
          name: '',
          email: '',
          phone: '',
          businessName: '',
          businessType: '',
          city: '',
          businessDescription: '',
          objectives: '',
          businessLicense: null,
          businessLicenseUrl: ''
        });
      } else {
        const errorMessage = data.error || 'There was an error submitting your pre-registration. Please try again.';
        setSubmitMessage({ 
          type: 'error', 
          text: errorMessage
        });
        showToast(errorMessage, 'error');
      }
    } catch (error) {
      console.error('Pre-registration error:', error);
      const errorMessage = 'Network error. Please check your connection and try again.';
      setSubmitMessage({ 
        type: 'error', 
        text: errorMessage
      });
      showToast(errorMessage, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
      />
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">FWC26 Vendor Support Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Navigate FIFA 2026 vendor requirements with expert guidance. From permits to operations, we've got you covered.
          </p>
          <div className="inline-flex items-center justify-center px-4 md:px-6 py-2 mb-6 text-base md:text-lg font-bold rounded-full bg-white/20 text-white" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>
            🚀 Launching March 2026
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">FWC26 Small Business Initiative Program</h2>
              <p className="text-gray-700 mb-6">
                Comprehensive support for small businesses looking to capitalize on FIFA 2026 opportunities in Toronto and Vancouver.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Vendor application & compliance support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Licensing & permit assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Business setup & documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Marketing & operations strategy</span>
                </li>
              </ul>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
              <div className="relative p-8">
                <h2 className="text-3xl font-bold text-white mb-6">FWC26 Canadian Vendor Initiative Program</h2>
                <p className="text-slate-200 mb-6">
                  Specialized vendor program for Canadian businesses seeking FIFA 2026 vendor opportunities and licensing support.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">✓</span>
                    <span className="text-slate-200">FIFA licensing support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">✓</span>
                    <span className="text-slate-200">Public viewing license applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">✓</span>
                    <span className="text-slate-200">Municipal vendor permits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">✓</span>
                    <span className="text-slate-200">Ongoing tournament support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Forms */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Program Registration</h2>
            
            {/* Form Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <button
                  onClick={() => setActiveForm('small-business')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeForm === 'small-business'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Small Business Initiative
                </button>
                <button
                  onClick={() => setActiveForm('vendor-initiative')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeForm === 'vendor-initiative'
                      ? 'bg-slate-800 text-white shadow-lg'
                      : 'text-gray-600 hover:text-slate-800'
                  }`}
                >
                  Vendor Initiative
                </button>
              </div>
            </div>

            {/* Success/Error Message */}
            {submitMessage && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitMessage.type === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                <p className="text-center">{submitMessage.text}</p>
              </div>
            )}

            {/* Small Business Initiative Form */}
            {activeForm === 'small-business' && (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center">
                  FWC26 Small Business Initiative Program Registration
                </h3>
                <form onSubmit={handleSmallBusinessSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={smallBusinessForm.name}
                        onChange={(e) => setSmallBusinessForm(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={smallBusinessForm.email}
                        onChange={(e) => setSmallBusinessForm(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={smallBusinessForm.phone}
                        onChange={(e) => setSmallBusinessForm(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={smallBusinessForm.businessName}
                        onChange={(e) => setSmallBusinessForm(prev => ({ ...prev, businessName: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Type *</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={smallBusinessForm.businessType}
                        onChange={(e) => setSmallBusinessForm(prev => ({ ...prev, businessType: e.target.value }))}
                      >
                        <option value="">Select Business Type</option>
                        <option value="food-truck">Food Truck</option>
                        <option value="retail">Retail</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="services">Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={smallBusinessForm.city}
                        onChange={(e) => setSmallBusinessForm(prev => ({ ...prev, city: e.target.value }))}
                      >
                        <option value="">Select City</option>
                        <option value="toronto">Toronto</option>
                        <option value="vancouver">Vancouver</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Description *</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your business, products, or services..."
                      value={smallBusinessForm.businessDescription}
                      onChange={(e) => setSmallBusinessForm(prev => ({ ...prev, businessDescription: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Program Objectives *</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="What objectives are you hoping to achieve in this program?"
                      value={smallBusinessForm.objectives}
                      onChange={(e) => setSmallBusinessForm(prev => ({ ...prev, objectives: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label htmlFor="smallBusinessLicense" className="block text-sm font-medium text-gray-700 mb-2">Business License (Optional)</label>
                    <input
                      type="file"
                      id="smallBusinessLicense"
                      accept=".pdf,.jpg,.jpeg,.png,.gif,.webp"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        setSmallBusinessForm(prev => ({ ...prev, businessLicense: file }));
                        if (file) {
                          showToast('File selected. It will be uploaded when you submit the form.', 'info');
                        }
                      }}
                    />
                    <p className="text-sm text-gray-500 mt-1">Upload your business license for faster verification (PDF, JPG, PNG, GIF, WebP - Max 10MB)</p>
                    {smallBusinessForm.businessLicense && (
                      <p className="text-sm text-green-600 mt-1">
                        ✓ {smallBusinessForm.businessLicense.name} selected
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-lg bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting Registration...' : 'Register for Small Business Initiative'}
                  </button>
                </form>
              </div>
            )}

            {/* Vendor Initiative Form */}
            {activeForm === 'vendor-initiative' && (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                  FWC26 Canadian Vendor Initiative Program Pre-Registration
                </h3>
                <form onSubmit={handleVendorSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                        value={vendorForm.name}
                        onChange={(e) => setVendorForm(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                        value={vendorForm.email}
                        onChange={(e) => setVendorForm(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                        value={vendorForm.phone}
                        onChange={(e) => setVendorForm(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                        value={vendorForm.businessName}
                        onChange={(e) => setVendorForm(prev => ({ ...prev, businessName: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Type *</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                        value={vendorForm.businessType}
                        onChange={(e) => setVendorForm(prev => ({ ...prev, businessType: e.target.value }))}
                      >
                        <option value="">Select Business Type</option>
                        <option value="food-vendor">Food Vendor</option>
                        <option value="merchandise">Merchandise</option>
                        <option value="beverage">Beverage</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="services">Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                        value={vendorForm.city}
                        onChange={(e) => setVendorForm(prev => ({ ...prev, city: e.target.value }))}
                      >
                        <option value="">Select City</option>
                        <option value="toronto">Toronto</option>
                        <option value="vancouver">Vancouver</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Description *</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      placeholder="Describe your business, products, or services..."
                      value={vendorForm.businessDescription}
                      onChange={(e) => setVendorForm(prev => ({ ...prev, businessDescription: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Program Objectives *</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      placeholder="What objectives are you hoping to achieve in this program?"
                      value={vendorForm.objectives}
                      onChange={(e) => setVendorForm(prev => ({ ...prev, objectives: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label htmlFor="vendorBusinessLicense" className="block text-sm font-medium text-gray-700 mb-2">Business License (Optional)</label>
                    <input
                      type="file"
                      id="vendorBusinessLicense"
                      accept=".pdf,.jpg,.jpeg,.png,.gif,.webp"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        setVendorForm(prev => ({ ...prev, businessLicense: file }));
                        if (file) {
                          showToast('File selected. It will be uploaded when you submit the form.', 'info');
                        }
                      }}
                    />
                    <p className="text-sm text-gray-500 mt-1">Upload your business license for faster verification (PDF, JPG, PNG, GIF, WebP - Max 10MB)</p>
                    {vendorForm.businessLicense && (
                      <p className="text-sm text-green-600 mt-1">
                        ✓ {vendorForm.businessLicense.name} selected
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-lg bg-slate-800 text-white font-bold text-lg shadow-lg hover:bg-slate-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting Pre-Registration...' : 'Pre-Register for Vendor Initiative'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses preparing for FIFA 2026. Register now to secure your spot in our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="px-8 py-4 rounded-lg bg-white text-blue-600 font-bold hover:bg-gray-100 transition">
              Book Consultation
            </Link>
            <Link href="/about-us" className="px-8 py-4 rounded-lg border-2 border-white text-white font-bold hover:bg-white hover:text-blue-600 transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
