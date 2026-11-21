import { useState } from 'react';
import { Clock3, Moon, CalendarX2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

type Group = 'men' | 'women';

interface DayEntry {
  id: string;
  days: string;
  time: string;
  secondary?: string;
  closed?: boolean;
}

const schedule: Record<Group, DayEntry[]> = {
  men: [
    { id: 'men-sun', days: 'الأحد – الثلاثاء – الخميس', time: '5 مساءً إلى 3 فجرًا' },
    { id: 'men-sat', days: 'السبت – الاثنين – الأربعاء', time: '10 صباحًا إلى 4 عصرًا', secondary: '9 مساءً إلى 3 فجرًا' },
    { id: 'men-fri', days: 'الجمعة', time: '3 عصرًا إلى 3 فجرًا' },
  ],
  women: [
    { id: 'women-sun', days: 'الأحد – الثلاثاء – الخميس', time: '10 صباحًا إلى 5 مساءً' },
    { id: 'women-sat', days: 'السبت – الاثنين – الأربعاء', time: '4 مساءً إلى 9 مساءً' },
    { id: 'women-fri', days: 'الجمعة', time: 'إجازة', closed: true },
  ],
};

const tabs: Array<{ value: Group; label: string }> = [
  { value: 'men', label: 'الرجال' },
  { value: 'women', label: 'السيدات' },
];

export default function TrainingHoursSection() {
  const [group, setGroup] = useState<Group>('men');

  return (
    <section id="hours" className="scroll-mt-24 bg-volt-black py-20 lg:py-28">
      <div className="volt-container">
        <SectionHeading
          eyebrow="مواعيد التمرين"
          title="مواعيد فتح النادي"
          description="اختار القسم المناسب واعرف مواعيد النادي بالتفصيل."
        />

        {/* Group tabs */}
        <div
          className="mx-auto mt-8 flex w-fit items-center gap-1 rounded-full border border-volt-line bg-volt-charcoal p-1.5"
          role="tablist"
          aria-label="اختيار القسم"
        >
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={group === tab.value}
              onClick={() => setGroup(tab.value)}
              className={`rounded-full px-6 py-2.5 text-sm font-extrabold transition-all duration-200 sm:px-10 sm:text-base ${
                group === tab.value
                  ? 'bg-volt-red text-white shadow-[0_8px_24px_-8px_rgba(229,36,48,0.55)]'
                  : 'text-volt-gray hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Schedule for the selected group */}
        <div key={group} className="mt-10 animate-fadeIn">
          <div className="mx-auto flex max-w-2xl flex-col gap-4">
            {schedule[group].map((entry) => (
              <article
                key={entry.id}
                className={`volt-card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6 ${
                  entry.closed ? 'opacity-90' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                      entry.closed ? 'bg-white/5 text-volt-gray' : 'bg-volt-redSoft text-volt-red'
                    }`}
                  >
                    {entry.closed ? <CalendarX2 size={19} /> : <Moon size={19} />}
                  </span>
                  <h3 className="text-base font-extrabold leading-relaxed sm:text-lg">{entry.days}</h3>
                </div>

                {entry.closed ? (
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-volt-line bg-black/40 px-4 py-2 text-sm font-bold text-volt-gray sm:mr-2">
                    <CalendarX2 size={16} />
                    {entry.time}
                  </span>
                ) : (
                  <div className="flex w-fit flex-col items-stretch gap-2 sm:items-end sm:mr-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-volt-red px-4 py-2 text-sm font-bold text-white shadow-[0_6px_20px_-6px_rgba(229,36,48,0.6)]">
                      <Clock3 size={16} />
                      {entry.time}
                    </span>
                    {entry.secondary && (
                      <span className="inline-flex items-center gap-2 rounded-full bg-volt-red px-4 py-2 text-sm font-bold text-white shadow-[0_6px_20px_-6px_rgba(229,36,48,0.6)]">
                        <Clock3 size={16} />
                        {entry.secondary}
                      </span>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
