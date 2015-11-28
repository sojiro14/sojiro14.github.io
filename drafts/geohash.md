Geo::Hash::XSのインストール

```bash
$ cpanm Geo::Hash::XS
--> Working on Geo::Hash::XS
Fetching http://cpan.metacpan.org/authors/id/D/DM/DMAKI/Geo-Hash-XS-0.00015.tar.gz ... OK
Configuring Geo-Hash-XS-0.00015 ... OK
Building and testing Geo-Hash-XS-0.00015 ... OK
Successfully installed Geo-Hash-XS-0.00015
1 distribution installed
```

実行してみる

```bash
$ Reply
0> use Geo::Hash::XS;
1> my $gh = Geo::Hash::XS->new();
$res[0] = bless( {}, 'Geo::Hash::XS' )

2> my lat = "35.658517";                                      
No such class lat at reply input line 1, near "}

#line 1 "reply input"
my lat"
syntax error at reply input line 1, near "#line 1 "reply input"
my lat ="
BEGIN not safe after errors--compilation aborted at reply input line 7, <FIN> line 3.

3> my $lat = "35.658517";
$res[1] = '35.658517'

4> my $lon = "139.701334";
$res[2] = '139.701334'

5> my $geohash = $gh->encode( $lat, $lon );
$res[3] = 'xn76fgrmvj2e'

6> my $geohash_length_9 = $gh->encode( $lat, $lon, 18 );             
$res[4] = 'xn76fgrmvj2eqg82nt'

7> my $geohash_length_9 = $gh->encode( $lat, $lon, 9 );  
$res[5] = 'xn76fgrmv'


8> my @list_of_geohashes = $gh->neighbors($geohash_length_9);                      
$res[6] = [
  'xn76fgrqj',
  'xn76fgrqn',
  'xn76fgrmy',
  'xn76fgrmw',
  'xn76fgrmt',
  'xn76fgrms',
  'xn76fgrmu',
  'xn76fgrqh'
]
```


