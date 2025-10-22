"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Toast from '@/components/Toast';
import { uploadToCloudinary, validateFile } from '@/lib/cloudinary';
import CountdownTimer from '@/components/CountdownTimer';

export default function VendorSupportPage() {
  const [activeForm, setActiveForm] = useState<'small-business' | 'vendor-initiative'>('small-business');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info'; isVisible: boolean }>({
    message: '',
    type: 'success',
    isVisible: false
  });

  // Handle URL parameters to set active form
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const form = urlParams.get('form');
    if (form === 'sbip' || form === 'small-business') {
      setActiveForm('small-business');
    } else if (form === 'vsp' || form === 'vendor-initiative') {
      setActiveForm('vendor-initiative');
    }
    
    // Scroll to forms if hash is present
    if (window.location.hash === '#registration-forms') {
      setTimeout(() => {
        document.getElementById('registration-forms')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">FWC26 Programs</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Choose your path to FIFA 2026 success. Join our comprehensive programs designed for small businesses and vendors.
          </p>
          <div className="inline-flex items-center justify-center px-4 md:px-6 py-2 mb-6 text-base md:text-lg font-bold rounded-full bg-white/20 text-white" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>
            🚀 Launching March 2026
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
            <div className="group bg-white p-8 rounded-2xl flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">FWC26 Small Business Initiative Program (SBIP)</h2>
              <p className="text-gray-700 mb-6">
                Empowering local entrepreneurs for FIFA World Cup 2026™. Comprehensive support for small businesses looking to capitalize on FIFA 2026 opportunities in Toronto and Vancouver.
              </p>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-sm font-bold rounded-full bg-blue-600 text-white mb-4">
                  Launch Date: February 17, 2026
                </span>
                <span className="inline-block px-3 py-1 text-sm font-bold rounded-full bg-green-600 text-white ml-2">
                  Pre-Registration Open Now!
                </span>
              </div>
              <div className="mb-6">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Program Launch Countdown</p>
                  <CountdownTimer targetDate={new Date('2026-02-17T00:00:00')} textColor="text-blue-600" />
                  <p className="text-xs text-gray-500 mt-1">Until FWC26 Small Business Initiative Program Launch</p>
                </div>
              </div>
              <div className="text-center mb-6">
                <button
                  onClick={() => {
                    setActiveForm('small-business');
                    document.getElementById('registration-forms')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Enroll Now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
              <ul className="space-y-3 text-gray-700 mb-8">
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
              <div className="text-center mt-auto">
                <a 
                  href="/docs/FWC26_SBIP_Guidelines_and_FAQ.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  📄 Download Program Guidelines & FAQ
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
              <div className="relative p-8 flex flex-col h-full">
                <h2 className="text-3xl font-bold text-white mb-6">FWC26 Vendor Support Program (VSP)</h2>
                <p className="text-slate-200 mb-6">
                  Vendor Support Services are designed to help navigate the complex requirements of vending during the FIFA World Cup 2026, encompassing applications and permits, as well as marketing and business readiness.
                </p>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 text-sm font-bold rounded-full bg-slate-600 text-white mb-4">
                    Launch Date: March 2026
                  </span>
                  <span className="inline-block px-3 py-1 text-sm font-bold rounded-full bg-green-600 text-white ml-2">
                    Registration Open Now!
                  </span>
                </div>
                <div className="text-center mb-6">
                  <button
                    onClick={() => {
                      setActiveForm('vendor-initiative');
                      document.getElementById('registration-forms')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center px-6 py-3 bg-white text-slate-800 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Pre-Enroll Now
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">✓</span>
                    <span className="text-slate-200">Vendor Application & Compliance Support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">✓</span>
                    <span className="text-slate-200">Licensing & Permit Assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">✓</span>
                    <span className="text-slate-200">Public Viewing & FIFA Licensing Support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">✓</span>
                    <span className="text-slate-200">Business Setup & Documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">✓</span>
                    <span className="text-slate-200">Vendor Education & Strategy Sessions</span>
                  </li>
                </ul>
                <div className="text-center mt-auto">
                  <a 
                    href="https://calendly.com/fwc26info/vsp-pre-onboarding-consultation" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-slate-800 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Book Pre-Onboarding Consultation
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VSP Program Framework */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Vendor Support Program Framework</h2>
            {/* Desktop Layout: 3 cards top row, 2 cards centered bottom row */}
            <div className="hidden lg:block">
              {/* Top Row - 3 Cards */}
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                      <h3 className="font-bold text-blue-600 mb-3 text-lg">Phase 1</h3>
                      <h4 className="font-semibold mb-3 text-gray-800 text-base leading-tight">Vendor Readiness Assessment</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Initial consultation, checklist review, and documentation audit</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                      <h3 className="font-bold text-blue-600 mb-3 text-lg">Phase 2</h3>
                      <h4 className="font-semibold mb-3 text-gray-800 text-base leading-tight">Application Preparation & Submission</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Complete application support, form completion, and submission tracking</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                      <h3 className="font-bold text-blue-600 mb-3 text-lg">Phase 3</h3>
                      <h4 className="font-semibold mb-3 text-gray-800 text-base leading-tight">Permit & License Acquisition</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Assistance with city and FIFA approvals</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Row - 2 Cards Centered */}
              <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-6 max-w-2xl">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full">
                    <div className="text-center h-full flex flex-col justify-between">
                      <div>
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
                        <h3 className="font-bold text-blue-600 mb-3 text-lg">Phase 4</h3>
                        <h4 className="font-semibold mb-3 text-gray-800 text-base leading-tight">Vendor Marketing & Operations Strategy</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Visibility strategy, booth setup support, and promotional content</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full">
                    <div className="text-center h-full flex flex-col justify-between">
                      <div>
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">5</div>
                        <h3 className="font-bold text-blue-600 mb-3 text-lg">Phase 5</h3>
                        <h4 className="font-semibold mb-3 text-gray-800 text-base leading-tight">Ongoing Tournament Support</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">On-call assistance, compliance tracking, and post-event reporting</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Layout: Responsive grid */}
            <div className="lg:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                    <h3 className="font-bold text-blue-600 mb-3 text-lg">Phase 1</h3>
                    <h4 className="font-semibold mb-3 text-gray-800 text-base leading-tight">Vendor Readiness Assessment</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Initial consultation, checklist review, and documentation audit</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                    <h3 className="font-bold text-blue-600 mb-3 text-lg">Phase 2</h3>
                    <h4 className="font-semibold mb-3 text-gray-800 text-base leading-tight">Application Preparation & Submission</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Complete application support, form completion, and submission tracking</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                    <h3 className="font-bold text-blue-600 mb-3 text-lg">Phase 3</h3>
                    <h4 className="font-semibold mb-3 text-gray-800 text-base leading-tight">Permit & License Acquisition</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Assistance with city and FIFA approvals</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
                    <h3 className="font-bold text-blue-600 mb-3 text-lg">Phase 4</h3>
                    <h4 className="font-semibold mb-3 text-gray-800 text-base leading-tight">Vendor Marketing & Operations Strategy</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Visibility strategy, booth setup support, and promotional content</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">5</div>
                    <h3 className="font-bold text-blue-600 mb-3 text-lg">Phase 5</h3>
                    <h4 className="font-semibold mb-3 text-gray-800 text-base leading-tight">Ongoing Tournament Support</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">On-call assistance, compliance tracking, and post-event reporting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Enrollment Tracks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Choose Your Enrollment Track</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We offer two specialized tracks to cater to different business timelines and preparation needs for FIFA 2026.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pre-Tournament Readiness Track */}
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-center my-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Pre-Tournament Readiness Track</h3>
                  <p className="text-gray-600">For vendors preparing months in advance</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-lg">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Early Planning & Permits</h4>
                      <p className="text-sm text-gray-600">Get ahead with early permit applications and compliance preparation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-lg">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Extended Support Period</h4>
                      <p className="text-sm text-gray-600">6+ months of dedicated support and guidance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-lg">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Priority Access</h4>
                      <p className="text-sm text-gray-600">First access to premium vendor locations and opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-lg">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Comprehensive Training</h4>
                      <p className="text-sm text-gray-600">In-depth workshops on FIFA compliance and business optimization</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <button
                    onClick={() => {
                      setActiveForm('small-business');
                      document.getElementById('registration-forms')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Enroll in Pre-Tournament Track
                  </button>
                </div>
              </div>

              {/* Tournament Operations Track */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-center my-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Tournament Operations Track</h3>
                  <p className="text-slate-200">For vendors joining around tournament launch</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-white font-bold text-lg">✓</span>
                    <div>
                      <h4 className="font-semibold text-slate-200">Fast-Track Setup</h4>
                      <p className="text-sm text-slate-300">Quick permit processing and rapid business setup</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-white font-bold text-lg">✓</span>
                    <div>
                      <h4 className="font-semibold text-slate-200">Focused Operations</h4>
                      <p className="text-sm text-slate-300">Intensive 2-3 month preparation focused on tournament operations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-white font-bold text-lg">✓</span>
                    <div>
                      <h4 className="font-semibold text-slate-200">Real-Time Support</h4>
                      <p className="text-sm text-slate-300">On-call assistance during tournament events</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-white font-bold text-lg">✓</span>
                    <div>
                      <h4 className="font-semibold text-slate-200">Marketing Focus</h4>
                      <p className="text-sm text-slate-300">Emphasis on marketing strategies and customer engagement</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <button
                    onClick={() => {
                      setActiveForm('vendor-initiative');
                      document.getElementById('registration-forms')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3 bg-white text-slate-800 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Enroll in Operations Track
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Forms */}
      <section id="registration-forms" className="py-16 bg-slate-50">
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
                  SBIP Pre-Register
                </button>
                <button
                  onClick={() => setActiveForm('vendor-initiative')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeForm === 'vendor-initiative'
                      ? 'bg-slate-800 text-white shadow-lg'
                      : 'text-gray-600 hover:text-slate-800'
                  }`}
                >
                  VSP Register
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
                    {isSubmitting ? 'Submitting Pre-Registration...' : 'Pre-Register for SBIP'}
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
                    {isSubmitting ? 'Submitting Registration...' : 'Register for VSP'}
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
