import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const navigation = [
    { name: 'Home', id: '/home', section: 'home', current: false },
    { name: 'About', id: '/about', section: 'about', current: false },
    { name: 'Services', id: '/services', section: 'service', current: false },
    { name: 'Projects', id: '/projects', section: 'projects', current: false },
    { name: 'Testimonials', id: '/testimonials', section: 'testimonial', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  // Handle navigation ke section atau halaman
  const handleNavigation = (item) => {
    // Jika di homepage dan target adalah section
    if (location.pathname === '/' && item.section) {
      const element = document.getElementById(item.section);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        return;
      }
    }
    
    // Jika di halaman lain atau target adalah halaman
    if (item.section) {
      // Navigate ke homepage dengan hash untuk scroll ke section
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(item.section);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      navigate(item.id);
    }
  };

  // Intersection Observer untuk mendeteksi active section
  useEffect(() => {
    const sections = navigation
      .filter(item => item.section)
      .map(item => item.section);

    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is 20% from top
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });

      // Special case: jika scroll ke paling atas, set Home sebagai active
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe semua sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Handle scroll untuk mendeteksi top of page
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  // Handle scroll ke section jika ada hash di URL saat page load
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location.hash]);

  // Function untuk check apakah navigation item sedang active
  const isActive = (item) => {
    // Jika di homepage
    if (location.pathname === '/') {
      // Jika item adalah Home dan tidak ada active section
      if (!item.section && (!activeSection || activeSection === '')) {
        return true;
      }
      // Jika item section sama dengan active section
      return item.section === activeSection;
    }
    
    // Jika di halaman lain, check berdasarkan pathname
    return location.pathname === item.id;
  };

  return (
    <Disclosure as="nav" className="bg-[#05053f] fixed top-0 z-50 w-full shadow-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          {/* Desktop Layout */}
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
            {/* Logo kiri */}
            <div className="absolute left-0 flex items-center pl-2">
                <button onClick={() => navigate('/')}>
                  <a href="/">
                    <img
                        className="h-10 w-auto"
                        src="./earth.png"
                        alt="Your Company"
                    />
                  </a>
                </button>
            </div>

            {/* Navigation tengah */}
            <div className="flex space-x-6 items-center justify-center">
                {navigation.map((item) => (
                    <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className={classNames(
                        isActive(item) 
                          ? 'text-blue-400 border-b-2 border-blue-400' 
                          : 'text-white hover:text-blue-600',
                        'transition duration-200 rounded-md px-3 py-2 text-sm font-medium'
                    )}
                    >
                    {item.name}
                    </button>
                ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex sm:hidden w-full items-center justify-center">
            <div className="absolute left-2 flex items-center">
                <button onClick={() => navigate('/')}>
                    <img
                        className="h-8 w-auto"
                        src="./earth.png"
                        alt="Your Company"
                    />
                </button>
            </div>

            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>

            <div className="absolute right-2 flex items-center">
                <button
                type="button"
                className="relative rounded-full p-1 text-white hover:text-indigo-300 hover:bg-transparent focus:outline-none transition duration-200"
                >
                <span className="sr-only">View notifications</span>
                <BellIcon className="size-6" aria-hidden="true" />
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 bg-[#05053f]">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="button"
              onClick={() => handleNavigation(item)}
              className={classNames(
                isActive(item) 
                  ? 'text-blue-400 bg-blue-900/20' 
                  : 'text-white hover:text-blue-600',
                'transition duration-200 w-full text-left block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}