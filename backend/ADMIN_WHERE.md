# Admin খুঁজে পাবেন কোথায়?

Sidebar এ **পুরোনো duplicate মেনু** (Experience highlights, Personal info fields…) সরানো হয়েছে। শুধু এইগুলো ব্যবহার করুন:

| কী চান | Admin মেনু | ঠিক কী করবেন |
|--------|-----------|-------------|
| **CV / Video / নাম / হিরো** | **Site profile (CV & video)** | `Media / CV` → **Cv pdf file** upload অথবা url |
| **Research papers** | **★ Research & publications** | Add → title, journal/conference, DOI |
| **Family (হোম `#family-information`)** | **★ Personal Information** → slug `family-information` | `Home summary`, image, sections — **no nav merge** |
| **Personal Info (nav `/personal-information`)** | **★ Personal Information** → slug `personal-information` | `show_on_home` off · sections with **images + life stories** |
| **অভিজ্ঞতা বুলেট** | **Experiences** | একটাই জায়গায় highlights (আলাদা “Experience highlights” নয়) |
| **কোর্স টেক** | **Courses** | Technologies ইনলাইন |

## ওয়েবসাইটে কোথায় দেখা যাবে

- **Research:** হোম পেজ → নেভ **Research** → `#research`
- **CV:** Education সেকশনে **My Resume** iframe
- **Personal Info:** নেভ **Personal Info** → `http://localhost:3000/personal-information`

Save করার পর Next.js পেজ **Ctrl+F5** refresh করুন। Django: `python manage.py runserver 8000`