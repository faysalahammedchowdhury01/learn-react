import React from 'react';

class Button extends React.Component {
  render() {
    const { click, locale, show, enable } = this.props;
    // if (enable) return null;
    return (
      <div className="main">
        <button onClick={() => click(locale)}>
          {locale === 'bn-BD' ? 'Change Clock' : 'ঘড়ি পরিবর্তন করুন'}
        </button>
        {show && <div>Show</div>}
      </div>
    );
  }
}
export default Button;
