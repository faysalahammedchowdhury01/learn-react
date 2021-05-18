import React from 'react';
import Bracket from './Composition/Bracket'; // Composition
import Emoji from './Composition/Emoji'; // Composition
import Text from './Composition/Text'; // Composition
import TextInheritance from './Inheritance/Text'; // Inheritance

export default function Lesson9() {
  return (
    <div className="main">
      <TextInheritance /> {/* Inheritance */}
      {/* Composition */}
      <Bracket>
        {({ addBracket }) => (
          <Emoji>
            {({ addEmoji }) => (
              <Text addBracket={addBracket} addEmoji={addEmoji} />
            )}
          </Emoji>
        )}
      </Bracket>
    </div>
  );
}
