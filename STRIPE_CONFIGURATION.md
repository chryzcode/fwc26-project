# 🔧 Stripe Configuration Required

## Current Issue
Your Stripe payment integration is failing because the required environment variables are not configured.

## Required Environment Variables

You need to set these environment variables in your Vercel deployment:

### 1. STRIPE_SECRET_KEY
- **What it is**: Your Stripe secret key (starts with `sk_test_` for testing, `sk_live_` for production)
- **Where to get it**: [Stripe Dashboard → API Keys](https://dashboard.stripe.com/apikeys)
- **Format**: `sk_test_1234567890abcdef...`

### 2. NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- **What it is**: Your Stripe publishable key (starts with `pk_test_` for testing, `pk_live_` for production)
- **Where to get it**: [Stripe Dashboard → API Keys](https://dashboard.stripe.com/apikeys)
- **Format**: `pk_test_1234567890abcdef...`

### 3. NEXT_PUBLIC_BASE_URL
- **What it is**: Your website's base URL
- **Current value**: `https://fwc26-project.vercel.app`

## How to Configure in Vercel

1. **Go to your Vercel dashboard**
2. **Select your project** (`fwc26-project`)
3. **Go to Settings → Environment Variables**
4. **Add each variable**:
   - `STRIPE_SECRET_KEY` = `sk_test_your_actual_key_here`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = `pk_test_your_actual_key_here`
   - `NEXT_PUBLIC_BASE_URL` = `https://fwc26-project.vercel.app`

5. **Redeploy your project** after adding the variables

## Testing

Once configured, you can test with Stripe's test cards:
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Expiry**: Any future date
- **CVC**: Any 3 digits

## Security Notes

- ✅ `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is safe to expose (starts with `pk_`)
- ❌ `STRIPE_SECRET_KEY` must be kept secret (starts with `sk_`)
- 🔒 Never commit secret keys to your code repository

## Need Help?

1. **Create a Stripe account** at [stripe.com](https://stripe.com)
2. **Get your API keys** from the dashboard
3. **Set environment variables** in Vercel
4. **Redeploy** your project

The payment system will work once these variables are properly configured!
